import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Globe, 
  Zap,
  DollarSign,
  Target,
  AlertTriangle,
  Filter,
  Download
} from "lucide-react";

interface HoldingData {
  symbol: string;
  name: string;
  sector: string;
  allocation: number;
  esgScore: number;
  carbonIntensity: number;
  greenRevenue: number;
  controversies: number;
  trend: 'up' | 'down' | 'stable';
  riskLevel: 'low' | 'medium' | 'high';
}

interface SectorAnalysis {
  sector: string;
  allocation: number;
  esgScore: number;
  carbonIntensity: number;
  physicalRisk: number;
  transitionRisk: number;
  opportunity: number;
}

export const PortfolioAnalysis = () => {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedMetric, setSelectedMetric] = useState<string>('esg-score');

  const portfolioHoldings: HoldingData[] = [
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      sector: 'Technology',
      allocation: 8.5,
      esgScore: 85,
      carbonIntensity: 12,
      greenRevenue: 95,
      controversies: 2,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      sector: 'Technology',
      allocation: 7.2,
      esgScore: 78,
      carbonIntensity: 8,
      greenRevenue: 35,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      sector: 'Technology',
      allocation: 6.8,
      esgScore: 82,
      carbonIntensity: 15,
      greenRevenue: 45,
      controversies: 1,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      sector: 'Technology',
      allocation: 6.1,
      esgScore: 71,
      carbonIntensity: 22,
      greenRevenue: 30,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'NEE',
      name: 'NextEra Energy Inc.',
      sector: 'Utilities',
      allocation: 6.8,
      esgScore: 82,
      carbonIntensity: 89,
      greenRevenue: 78,
      controversies: 1,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'ØRSTED',
      name: 'Ørsted A/S',
      sector: 'Renewable Energy',
      allocation: 5.2,
      esgScore: 95,
      carbonIntensity: 5,
      greenRevenue: 98,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      sector: 'Technology',
      allocation: 5.9,
      esgScore: 65,
      carbonIntensity: 45,
      greenRevenue: 25,
      controversies: 3,
      trend: 'stable',
      riskLevel: 'medium'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      sector: 'Technology',
      allocation: 4.8,
      esgScore: 76,
      carbonIntensity: 12,
      greenRevenue: 40,
      controversies: 2,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      sector: 'Healthcare',
      allocation: 4.7,
      esgScore: 74,
      carbonIntensity: 28,
      greenRevenue: 15,
      controversies: 2,
      trend: 'stable',
      riskLevel: 'low'
    },
    {
      symbol: 'UNH',
      name: 'UnitedHealth Group',
      sector: 'Healthcare',
      allocation: 4.2,
      esgScore: 69,
      carbonIntensity: 8,
      greenRevenue: 12,
      controversies: 1,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'XOM',
      name: 'Exxon Mobil Corp.',
      sector: 'Energy',
      allocation: 4.1,
      esgScore: 32,
      carbonIntensity: 450,
      greenRevenue: 5,
      controversies: 8,
      trend: 'down',
      riskLevel: 'high'
    },
    {
      symbol: 'CVX',
      name: 'Chevron Corporation',
      sector: 'Energy',
      allocation: 3.8,
      esgScore: 35,
      carbonIntensity: 420,
      greenRevenue: 8,
      controversies: 6,
      trend: 'down',
      riskLevel: 'high'
    },
    {
      symbol: 'PFE',
      name: 'Pfizer Inc.',
      sector: 'Healthcare',
      allocation: 3.5,
      esgScore: 71,
      carbonIntensity: 18,
      greenRevenue: 20,
      controversies: 1,
      trend: 'stable',
      riskLevel: 'low'
    },
    {
      symbol: 'BRK.B',
      name: 'Berkshire Hathaway',
      sector: 'Financial Services',
      allocation: 3.2,
      esgScore: 58,
      carbonIntensity: 180,
      greenRevenue: 18,
      controversies: 2,
      trend: 'stable',
      riskLevel: 'medium'
    },
    {
      symbol: 'V',
      name: 'Visa Inc.',
      sector: 'Financial Services',
      allocation: 2.9,
      esgScore: 73,
      carbonIntensity: 6,
      greenRevenue: 22,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'ENPH',
      name: 'Enphase Energy',
      sector: 'Renewable Energy',
      allocation: 2.8,
      esgScore: 88,
      carbonIntensity: 12,
      greenRevenue: 100,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'FSLR',
      name: 'First Solar Inc.',
      sector: 'Renewable Energy',
      allocation: 2.6,
      esgScore: 90,
      carbonIntensity: 8,
      greenRevenue: 100,
      controversies: 0,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'WM',
      name: 'Waste Management',
      sector: 'Utilities',
      allocation: 2.4,
      esgScore: 67,
      carbonIntensity: 95,
      greenRevenue: 35,
      controversies: 1,
      trend: 'stable',
      riskLevel: 'medium'
    },
    {
      symbol: 'BLK',
      name: 'BlackRock Inc.',
      sector: 'Financial Services',
      allocation: 2.2,
      esgScore: 75,
      carbonIntensity: 4,
      greenRevenue: 28,
      controversies: 1,
      trend: 'up',
      riskLevel: 'low'
    },
    {
      symbol: 'HD',
      name: 'Home Depot Inc.',
      sector: 'Consumer Discretionary',
      allocation: 2.1,
      esgScore: 62,
      carbonIntensity: 85,
      greenRevenue: 25,
      controversies: 2,
      trend: 'stable',
      riskLevel: 'medium'
    }
  ];

  const sectorAnalysis: SectorAnalysis[] = [
    {
      sector: 'Technology',
      allocation: 35,
      esgScore: 72,
      carbonIntensity: 25,
      physicalRisk: 20,
      transitionRisk: 15,
      opportunity: 85
    },
    {
      sector: 'Renewable Energy',
      allocation: 25,
      esgScore: 88,
      carbonIntensity: 8,
      physicalRisk: 15,
      transitionRisk: 10,
      opportunity: 95
    },
    {
      sector: 'Fossil Fuels',
      allocation: 15,
      esgScore: 35,
      carbonIntensity: 380,
      physicalRisk: 85,
      transitionRisk: 90,
      opportunity: 25
    },
    {
      sector: 'Healthcare',
      allocation: 12,
      esgScore: 68,
      carbonIntensity: 35,
      physicalRisk: 30,
      transitionRisk: 20,
      opportunity: 60
    },
    {
      sector: 'Financial Services',
      allocation: 8,
      esgScore: 62,
      carbonIntensity: 15,
      physicalRisk: 25,
      transitionRisk: 30,
      opportunity: 70
    },
    {
      sector: 'Manufacturing',
      allocation: 5,
      esgScore: 58,
      carbonIntensity: 125,
      physicalRisk: 65,
      transitionRisk: 70,
      opportunity: 45
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'high': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-success" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-destructive" />;
      case 'stable': return <BarChart3 className="w-4 h-4 text-muted-foreground" />;
      default: return <BarChart3 className="w-4 h-4" />;
    }
  };

  const getESGGrade = (score: number) => {
    if (score >= 80) return { grade: 'A', color: 'text-success' };
    if (score >= 70) return { grade: 'B', color: 'text-primary' };
    if (score >= 60) return { grade: 'C', color: 'text-warning' };
    if (score >= 50) return { grade: 'D', color: 'text-orange-500' };
    return { grade: 'F', color: 'text-destructive' };
  };

  const filteredHoldings = selectedSector === 'all' 
    ? portfolioHoldings 
    : portfolioHoldings.filter(h => h.sector === selectedSector);

  const portfolioESGScore = Math.round(
    portfolioHoldings.reduce((sum, holding) => sum + (holding.esgScore * holding.allocation / 100), 0)
  );

  const portfolioCarbonIntensity = Math.round(
    portfolioHoldings.reduce((sum, holding) => sum + (holding.carbonIntensity * holding.allocation / 100), 0)
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <PieChart className="w-8 h-8 text-esg-social" />
          <div>
            <h1 className="text-3xl font-bold">Portfolio ESG Analysis</h1>
            <p className="text-muted-foreground">Comprehensive ESG performance and risk assessment</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedSector} onValueChange={setSelectedSector}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sectors</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Energy">Energy</SelectItem>
              <SelectItem value="Utilities">Utilities</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Analysis
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio ESG Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">{portfolioESGScore}/100</div>
            <div className="text-sm text-muted-foreground">
              Grade: <span className={getESGGrade(portfolioESGScore).color}>{getESGGrade(portfolioESGScore).grade}</span>
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">+5 vs last quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Intensity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emissions-medium">{portfolioCarbonIntensity}</div>
            <div className="text-sm text-muted-foreground">tCO2e/$M invested</div>
            <div className="flex items-center mt-2">
              <TrendingDown className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">-12% vs benchmark</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Green Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">42%</div>
            <div className="text-sm text-muted-foreground">Weighted average</div>
            <div className="flex items-center mt-2">
              <Target className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">Target: 50%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">ESG Controversies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">16</div>
            <div className="text-sm text-muted-foreground">Active incidents</div>
            <div className="flex items-center mt-2">
              <AlertTriangle className="w-4 h-4 text-warning mr-1" />
              <span className="text-sm text-warning">3 high severity</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="holdings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="holdings">Holdings Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sector Breakdown</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          <TabsTrigger value="green-finance">Green Finance</TabsTrigger>
          <TabsTrigger value="optimization">Portfolio Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="space-y-6">
          {/* Holdings Table */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Portfolio Holdings ESG Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Company</th>
                      <th className="text-left p-3">Sector</th>
                      <th className="text-right p-3">Allocation</th>
                      <th className="text-right p-3">ESG Score</th>
                      <th className="text-right p-3">Carbon Intensity</th>
                      <th className="text-right p-3">Green Revenue</th>
                      <th className="text-right p-3">Controversies</th>
                      <th className="text-center p-3">Trend</th>
                      <th className="text-center p-3">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHoldings.map((holding) => (
                      <tr key={holding.symbol} className="border-b hover:bg-muted/50">
                        <td className="p-3">
                          <div>
                            <div className="font-medium">{holding.symbol}</div>
                            <div className="text-xs text-muted-foreground">{holding.name}</div>
                          </div>
                        </td>
                        <td className="p-3">{holding.sector}</td>
                        <td className="p-3 text-right font-medium">{holding.allocation}%</td>
                        <td className="p-3 text-right">
                          <div className={`font-medium ${getESGGrade(holding.esgScore).color}`}>
                            {holding.esgScore}
                          </div>
                        </td>
                        <td className="p-3 text-right">{holding.carbonIntensity}</td>
                        <td className="p-3 text-right">{holding.greenRevenue}%</td>
                        <td className="p-3 text-right">
                          {holding.controversies > 0 ? (
                            <Badge variant="destructive" className="text-xs">
                              {holding.controversies}
                            </Badge>
                          ) : (
                            <span className="text-success">0</span>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {getTrendIcon(holding.trend)}
                        </td>
                        <td className="p-3 text-center">
                          <Badge className={getRiskColor(holding.riskLevel)}>
                            {holding.riskLevel}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors" className="space-y-6">
          {/* Sector Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-esg-environmental" />
                  Sector Allocation & ESG Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorAnalysis.map((sector, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{sector.sector}</h4>
                        <div className="text-right">
                          <div className="font-bold">{sector.allocation}%</div>
                          <div className="text-xs text-muted-foreground">allocation</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">ESG Score</span>
                          <div className={`font-medium ${getESGGrade(sector.esgScore).color}`}>
                            {sector.esgScore}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Carbon Intensity</span>
                          <div className="font-medium">{sector.carbonIntensity}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Opportunity</span>
                          <div className="font-medium text-esg-environmental">{sector.opportunity}%</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={sector.esgScore} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  ESG Metrics Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium">ESG Score Distribution</Label>
                    <div className="space-y-2 mt-2">
                      {[
                        { range: '80-100 (A)', count: 35, color: 'bg-success' },
                        { range: '70-79 (B)', count: 28, color: 'bg-primary' },
                        { range: '60-69 (C)', count: 22, color: 'bg-warning' },
                        { range: '50-59 (D)', count: 10, color: 'bg-orange-500' },
                        { range: '0-49 (F)', count: 5, color: 'bg-destructive' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded ${item.color}`} />
                          <span className="text-sm flex-1">{item.range}</span>
                          <span className="text-sm font-medium">{item.count}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Carbon Risk Categories</Label>
                    <div className="space-y-2 mt-2">
                      {[
                        { category: 'Low Risk (<50 tCO2e/$M)', percentage: 45 },
                        { category: 'Medium Risk (50-200)', percentage: 35 },
                        { category: 'High Risk (>200)', percentage: 20 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.category}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          {/* Climate Risk Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-warning" />
                  Physical Climate Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorAnalysis.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div>
                        <div className="font-medium">{sector.sector}</div>
                        <div className="text-sm text-muted-foreground">{sector.allocation}% allocation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{sector.physicalRisk}%</div>
                        <Badge className={sector.physicalRisk > 70 ? getRiskColor('high') : sector.physicalRisk > 40 ? getRiskColor('medium') : getRiskColor('low')}>
                          {sector.physicalRisk > 70 ? 'High' : sector.physicalRisk > 40 ? 'Medium' : 'Low'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-esg-social" />
                  Transition Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorAnalysis.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div>
                        <div className="font-medium">{sector.sector}</div>
                        <div className="text-sm text-muted-foreground">Regulatory & market shifts</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{sector.transitionRisk}%</div>
                        <Badge className={sector.transitionRisk > 70 ? getRiskColor('high') : sector.transitionRisk > 40 ? getRiskColor('medium') : getRiskColor('low')}>
                          {sector.transitionRisk > 70 ? 'High' : sector.transitionRisk > 40 ? 'Medium' : 'Low'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Summary */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Portfolio Risk Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning mb-2">Medium</div>
                  <div className="text-muted-foreground">Overall Climate Risk</div>
                  <div className="text-sm mt-2">
                    Based on weighted exposure across physical and transition risks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">-2.8%</div>
                  <div className="text-muted-foreground">Climate VaR (1.5°C)</div>
                  <div className="text-sm mt-2">
                    Potential portfolio impact under 1.5°C warming scenario
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-esg-environmental mb-2">68%</div>
                  <div className="text-muted-foreground">Transition Readiness</div>
                  <div className="text-sm mt-2">
                    Companies with credible net-zero transition plans
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="green-finance" className="space-y-6">
          {/* Green Finance Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Green Bonds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-esg-environmental">$2.8B</div>
                <div className="text-sm text-muted-foreground">18% of portfolio</div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-success mr-1" />
                  <span className="text-sm text-success">+45% YoY</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sustainability Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-esg-social">$1.9B</div>
                <div className="text-sm text-muted-foreground">12% allocation</div>
                <div className="flex items-center mt-2">
                  <Target className="w-4 h-4 text-primary mr-1" />
                  <span className="text-sm text-primary">42 active deals</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$450M</div>
                <div className="text-sm text-muted-foreground">2.9% allocation</div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-success mr-1" />
                  <span className="text-sm text-success">+125% YoY</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Impact Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">$820M</div>
                <div className="text-sm text-muted-foreground">5.3% allocation</div>
                <div className="flex items-center mt-2">
                  <Zap className="w-4 h-4 text-warning mr-1" />
                  <span className="text-sm text-warning">Medium risk</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Green Finance Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-esg-environmental" />
                  Green Bond Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { issuer: 'European Investment Bank', amount: '$450M', coupon: '2.75%', maturity: '2029', rating: 'AAA', use: 'Renewable Energy' },
                    { issuer: 'Apple Inc.', amount: '$380M', coupon: '3.25%', maturity: '2031', rating: 'AA+', use: 'Clean Transportation' },
                    { issuer: 'Toyota Motor Corp.', amount: '$320M', coupon: '2.95%', maturity: '2028', rating: 'AA', use: 'Sustainable Mobility' },
                    { issuer: 'Microsoft Corp.', amount: '$280M', coupon: '3.45%', maturity: '2033', rating: 'AAA', use: 'Carbon Removal' },
                    { issuer: 'Alphabet Inc.', amount: '$250M', coupon: '3.15%', maturity: '2030', rating: 'AA+', use: 'Energy Efficiency' }
                  ].map((bond, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{bond.issuer}</h4>
                        <Badge className="bg-esg-environmental text-white">{bond.rating}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Amount:</span>
                          <div className="font-medium">{bond.amount}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Coupon:</span>
                          <div className="font-medium">{bond.coupon}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Maturity:</span>
                          <div className="font-medium">{bond.maturity}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Use of Proceeds:</span>
                          <div className="font-medium text-esg-environmental">{bond.use}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-esg-social" />
                  Sustainability-Linked Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { borrower: 'Tesla Inc.', amount: '$500M', rate: 'SOFR + 1.25%', kpi: 'Carbon Intensity Reduction', target: '-15% by 2025', status: 'On Track' },
                    { borrower: 'Unilever PLC', amount: '$320M', rate: 'EURIBOR + 0.95%', kpi: 'Sustainable Sourcing', target: '100% by 2026', status: 'Ahead' },
                    { borrower: 'IKEA Group', amount: '$280M', rate: 'SOFR + 1.15%', kpi: 'Renewable Energy', target: '100% by 2025', status: 'On Track' },
                    { borrower: 'Danone SA', amount: '$250M', rate: 'EURIBOR + 1.05%', kpi: 'Water Efficiency', target: '+20% by 2024', status: 'Behind' },
                    { borrower: 'Walmart Inc.', amount: '$420M', rate: 'SOFR + 1.35%', kpi: 'Scope 3 Emissions', target: '-40% by 2030', status: 'On Track' }
                  ].map((loan, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{loan.borrower}</h4>
                        <Badge className={
                          loan.status === 'Ahead' ? 'bg-success text-white' :
                          loan.status === 'On Track' ? 'bg-primary text-white' :
                          'bg-warning text-white'
                        }>
                          {loan.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Amount:</span>
                          <div className="font-medium">{loan.amount}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rate:</span>
                          <div className="font-medium">{loan.rate}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">KPI:</span>
                          <div className="font-medium">{loan.kpi}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Target:</span>
                          <div className="font-medium text-esg-social">{loan.target}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carbon Credits and Impact Investments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Carbon Credits Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { project: 'Amazon Rainforest Conservation', type: 'REDD+', volume: '2.5M tCO2e', price: '$45/tCO2e', vintage: '2024', standard: 'VCS' },
                    { project: 'Kenya Cookstoves Program', type: 'Cookstoves', volume: '1.8M tCO2e', price: '$12/tCO2e', vintage: '2023', standard: 'Gold Standard' },
                    { project: 'Texas Wind Farm', type: 'Renewable Energy', volume: '3.2M tCO2e', price: '$35/tCO2e', vintage: '2024', standard: 'CAR' },
                    { project: 'Direct Air Capture - Iceland', type: 'Carbon Removal', volume: '0.5M tCO2e', price: '$150/tCO2e', vintage: '2024', standard: 'VCS' }
                  ].map((credit, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{credit.project}</h4>
                        <Badge variant="outline">{credit.standard}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Type:</span>
                          <div className="font-medium">{credit.type}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Volume:</span>
                          <div className="font-medium">{credit.volume}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price:</span>
                          <div className="font-medium text-primary">{credit.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-secondary" />
                  Impact Investment Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { fund: 'Clean Energy Infrastructure Fund', allocation: '$180M', irr: '12.5%', impact: '5.2M tCO2e avoided', sector: 'Energy' },
                    { fund: 'Sustainable Agriculture Growth', allocation: '$145M', irr: '9.8%', impact: '2.8M farmers supported', sector: 'Agriculture' },
                    { fund: 'Water Access Initiative', allocation: '$120M', irr: '11.2%', impact: '1.5M people served', sector: 'Water' },
                    { fund: 'Circular Economy Ventures', allocation: '$95M', irr: '15.3%', impact: '500K tons waste diverted', sector: 'Waste' },
                    { fund: 'Healthcare Access Fund', allocation: '$180M', irr: '10.5%', impact: '3.2M patients treated', sector: 'Healthcare' }
                  ].map((investment, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{investment.fund}</h4>
                        <Badge className="bg-secondary text-white">{investment.sector}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Allocation:</span>
                          <div className="font-medium">{investment.allocation}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">IRR:</span>
                          <div className="font-medium text-success">{investment.irr}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Impact:</span>
                          <div className="font-medium text-secondary">{investment.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          {/* Portfolio Optimization Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Optimization Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: 'Reduce Oil & Gas Exposure',
                      current: '15%',
                      target: '8%',
                      impact: '+2.3% ESG score',
                      urgency: 'high'
                    },
                    {
                      action: 'Increase Renewable Energy',
                      current: '25%',
                      target: '35%',
                      impact: '-15% carbon intensity',
                      urgency: 'medium'
                    },
                    {
                      action: 'Divest High-Controversy Holdings',
                      current: '8 holdings',
                      target: '3 holdings',
                      impact: '+1.8% ESG score',
                      urgency: 'high'
                    },
                    {
                      action: 'Add ESG Leaders',
                      current: '35% allocation',
                      target: '50% allocation',
                      impact: '+12% green revenue',
                      urgency: 'medium'
                    }
                  ].map((rec, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{rec.action}</h4>
                        <Badge className={rec.urgency === 'high' ? getRiskColor('high') : getRiskColor('medium')}>
                          {rec.urgency} priority
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Current:</span>
                          <div className="font-medium">{rec.current}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Target:</span>
                          <div className="font-medium">{rec.target}</div>
                        </div>
                      </div>
                      <div className="mt-2 p-2 rounded bg-success/10">
                        <div className="text-xs text-success font-medium">Expected Impact: {rec.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Optimized Portfolio Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Key Improvements</h4>
                    <div className="space-y-3">
                      {[
                        { metric: 'ESG Score', current: 67, target: 78, improvement: '+11' },
                        { metric: 'Carbon Intensity', current: 145, target: 89, improvement: '-39%' },
                        { metric: 'Green Revenue', current: 42, target: 58, improvement: '+16%' },
                        { metric: 'Climate VaR', current: -2.8, target: -1.9, improvement: '+32%' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <span className="font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">
                              {item.current} → {item.target}
                            </div>
                            <div className="text-sm font-medium text-success">{item.improvement}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Implementation Timeline</h4>
                    <div className="space-y-2">
                      {[
                        { phase: 'Phase 1: Divest High-Risk Assets', duration: '1-2 months' },
                        { phase: 'Phase 2: Rebalance Sector Allocation', duration: '3-4 months' },
                        { phase: 'Phase 3: Add ESG Leaders', duration: '5-6 months' },
                        { phase: 'Phase 4: Monitor & Optimize', duration: 'Ongoing' }
                      ].map((phase, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span>{phase.phase}</span>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <h4 className="font-medium text-primary mb-2">Expected Outcome</h4>
                    <p className="text-sm text-muted-foreground">
                      Portfolio optimization could improve ESG performance by 16% while maintaining similar risk-adjusted returns and reducing climate risk exposure by 30%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};