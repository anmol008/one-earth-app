import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Thermometer, 
  Globe, 
  BarChart3, 
  ArrowUp, 
  ArrowDown,
  Brain,
  Play,
  RefreshCw,
  Download
} from "lucide-react";

interface ScenarioResult {
  scenario: string;
  energyReduction: number;
  emissionsReduction: number;
  cost: number;
  roi: number;
  timeframe: number;
  probability: number;
  riskLevel: 'low' | 'medium' | 'high';
}

interface PortfolioRisk {
  sector: string;
  currentAllocation: number;
  climateRisk: number;
  transitionRisk: number;
  recommendation: string;
  potentialImpact: number;
}

export const ScenarioPlanning = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>('net-zero');
  const [temperatureTarget, setTemperatureTarget] = useState([1.5]);
  const [timeHorizon, setTimeHorizon] = useState([2030]);
  const [investmentLevel, setInvestmentLevel] = useState([50]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const scenarioResults: ScenarioResult[] = [
    {
      scenario: 'Conservative Transition',
      energyReduction: 25,
      emissionsReduction: 30,
      cost: 2500000,
      roi: 8.5,
      timeframe: 8,
      probability: 85,
      riskLevel: 'low'
    },
    {
      scenario: 'Aggressive Net Zero',
      energyReduction: 65,
      emissionsReduction: 70,
      cost: 8500000,
      roi: 12.3,
      timeframe: 6,
      probability: 65,
      riskLevel: 'high'
    },
    {
      scenario: 'Balanced Approach',
      energyReduction: 45,
      emissionsReduction: 50,
      cost: 5200000,
      roi: 10.2,
      timeframe: 7,
      probability: 75,
      riskLevel: 'medium'
    },
    {
      scenario: 'Technology-Led',
      energyReduction: 55,
      emissionsReduction: 60,
      cost: 6800000,
      roi: 11.8,
      timeframe: 5,
      probability: 70,
      riskLevel: 'medium'
    }
  ];

  const portfolioRisks: PortfolioRisk[] = [
    {
      sector: 'Oil & Gas',
      currentAllocation: 15,
      climateRisk: 85,
      transitionRisk: 90,
      recommendation: 'Reduce allocation by 50%',
      potentialImpact: -12.5
    },
    {
      sector: 'Renewable Energy',
      currentAllocation: 25,
      climateRisk: 20,
      transitionRisk: 15,
      recommendation: 'Increase allocation by 30%',
      potentialImpact: +18.2
    },
    {
      sector: 'Technology',
      currentAllocation: 30,
      climateRisk: 30,
      transitionRisk: 25,
      recommendation: 'Maintain current allocation',
      potentialImpact: +2.1
    },
    {
      sector: 'Manufacturing',
      currentAllocation: 20,
      climateRisk: 65,
      transitionRisk: 70,
      recommendation: 'Reduce allocation by 25%',
      potentialImpact: -8.3
    },
    {
      sector: 'Financial Services',
      currentAllocation: 10,
      climateRisk: 35,
      transitionRisk: 40,
      recommendation: 'Maintain current allocation',
      potentialImpact: +1.5
    }
  ];

  const runScenarioAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'high': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImpactColor = (impact: number) => {
    return impact > 0 ? 'text-success' : 'text-destructive';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">AI-Powered Scenario Planning</h1>
            <p className="text-muted-foreground">Advanced modeling for energy transition, net zero planning, and portfolio optimization</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button onClick={runScenarioAnalysis} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            Run Analysis
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Climate Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">{temperatureTarget[0]}°C</div>
            <div className="text-sm text-muted-foreground">Temperature limit</div>
            <div className="flex items-center mt-2">
              <Target className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">Paris Agreement aligned</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Time Horizon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{timeHorizon[0]}</div>
            <div className="text-sm text-muted-foreground">Target year</div>
            <div className="flex items-center mt-2">
              <Thermometer className="w-4 h-4 text-warning mr-1" />
              <span className="text-sm text-warning">{timeHorizon[0] - 2024} years remaining</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Investment Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-social">{investmentLevel[0]}%</div>
            <div className="text-sm text-muted-foreground">Portfolio allocation</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">Aggressive approach</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Success Probability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">73%</div>
            <div className="text-sm text-muted-foreground">Based on current plan</div>
            <Progress value={73} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="energy" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="energy">Energy Transition</TabsTrigger>
          <TabsTrigger value="netzero">Net Zero Planning</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio Risk</TabsTrigger>
        </TabsList>

        <TabsContent value="energy" className="space-y-6">
          {/* Energy Transition Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-warning" />
                  Scenario Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Temperature Target (°C)</Label>
                  <div className="mt-2">
                    <Slider
                      value={temperatureTarget}
                      onValueChange={setTemperatureTarget}
                      max={3}
                      min={1.5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1.5°C</span>
                      <span>Current: {temperatureTarget[0]}°C</span>
                      <span>3.0°C</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Time Horizon</Label>
                  <div className="mt-2">
                    <Slider
                      value={timeHorizon}
                      onValueChange={setTimeHorizon}
                      max={2050}
                      min={2025}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>2025</span>
                      <span>Target: {timeHorizon[0]}</span>
                      <span>2050</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Investment Allocation (%)</Label>
                  <div className="mt-2">
                    <Slider
                      value={investmentLevel}
                      onValueChange={setInvestmentLevel}
                      max={100}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10%</span>
                      <span>Current: {investmentLevel[0]}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Primary Focus</Label>
                  <Select value={selectedScenario} onValueChange={setSelectedScenario}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renewable">Renewable Energy</SelectItem>
                      <SelectItem value="efficiency">Energy Efficiency</SelectItem>
                      <SelectItem value="storage">Energy Storage</SelectItem>
                      <SelectItem value="net-zero">Net Zero Transition</SelectItem>
                      <SelectItem value="innovation">Technology Innovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={runScenarioAnalysis} className="w-full" disabled={isAnalyzing}>
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing Scenarios...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Generate AI Scenarios
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Scenario Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scenarioResults.map((result, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{result.scenario}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge className={getRiskColor(result.riskLevel)}>
                            {result.riskLevel} risk
                          </Badge>
                          <Badge variant="outline">
                            {result.probability}% likely
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Energy Reduction:</span>
                          <div className="font-medium text-esg-environmental">{result.energyReduction}%</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Emissions Cut:</span>
                          <div className="font-medium text-esg-environmental">{result.emissionsReduction}%</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Investment:</span>
                          <div className="font-medium">${(result.cost / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">ROI:</span>
                          <div className="font-medium text-success">{result.roi}%</div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Timeline: {result.timeframe} years</span>
                          <span>Success Rate: {result.probability}%</span>
                        </div>
                        <Progress value={result.probability} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="netzero" className="space-y-6">
          {/* Net Zero Planning */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-esg-environmental" />
                  Current Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-esg-environmental">34%</div>
                  <div className="text-muted-foreground">to Net Zero by 2040</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 1 Reduction</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 2 Reduction</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 3 Reduction</span>
                      <span>22%</span>
                    </div>
                    <Progress value={22} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="w-5 h-5 mr-2 text-warning" />
                  Temperature Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning">+1.8°C</div>
                    <div className="text-sm text-muted-foreground">Current trajectory</div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { scenario: 'Current Path', temp: 1.8, color: 'bg-destructive' },
                      { scenario: 'With Initiatives', temp: 1.6, color: 'bg-warning' },
                      { scenario: 'Full Net Zero', temp: 1.4, color: 'bg-success' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.scenario}</span>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${item.color}`} />
                          <span className="text-sm font-medium">+{item.temp}°C</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-esg-social" />
                  Recommended Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: 'Accelerate solar deployment', impact: 'High', priority: 1 },
                    { action: 'Expand EV fleet program', impact: 'Medium', priority: 2 },
                    { action: 'Implement carbon capture', impact: 'High', priority: 3 },
                    { action: 'Green supplier program', impact: 'Medium', priority: 4 },
                    { action: 'Employee engagement', impact: 'Low', priority: 5 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                          {item.priority}
                        </div>
                        <span className="text-sm">{item.action}</span>
                      </div>
                      <Badge variant={item.impact === 'High' ? 'default' : item.impact === 'Medium' ? 'secondary' : 'outline'}>
                        {item.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI-Generated Insights & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Key Findings</h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <ArrowUp className="w-4 h-4 text-success" />
                        <span className="font-medium text-success">Opportunity</span>
                      </div>
                      <p className="text-sm">Scope 2 emissions can be reduced by 80% through renewable energy procurement, providing the fastest path to net zero.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <ArrowDown className="w-4 h-4 text-warning" />
                        <span className="font-medium text-warning">Challenge</span>
                      </div>
                      <p className="text-sm">Scope 3 emissions require extensive supplier engagement and may take 8-10 years to achieve significant reductions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Strategic Recommendations</h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border">
                      <h5 className="font-medium text-sm mb-1">Phase 1: Quick Wins (2024-2026)</h5>
                      <p className="text-xs text-muted-foreground">Focus on renewable energy procurement and operational efficiency improvements for immediate 40% reduction.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-border">
                      <h5 className="font-medium text-sm mb-1">Phase 2: Infrastructure (2027-2035)</h5>
                      <p className="text-xs text-muted-foreground">Invest in carbon capture, advanced manufacturing, and comprehensive supplier transformation.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-border">
                      <h5 className="font-medium text-sm mb-1">Phase 3: Innovation (2036-2040)</h5>
                      <p className="text-xs text-muted-foreground">Deploy breakthrough technologies and offset remaining emissions through verified carbon removal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          {/* Portfolio Risk Analysis */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-esg-social" />
                Climate Risk Assessment by Sector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioRisks.map((risk, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{risk.sector}</h4>
                        <p className="text-sm text-muted-foreground">{risk.currentAllocation}% of portfolio</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getImpactColor(risk.potentialImpact)}`}>
                          {risk.potentialImpact > 0 ? '+' : ''}{risk.potentialImpact}%
                        </div>
                        <div className="text-xs text-muted-foreground">Potential impact</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Physical Risk</span>
                          <span>{risk.climateRisk}%</span>
                        </div>
                        <Progress value={risk.climateRisk} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Transition Risk</span>
                          <span>{risk.transitionRisk}%</span>
                        </div>
                        <Progress value={risk.transitionRisk} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="p-2 rounded bg-muted/50">
                      <div className="text-xs text-muted-foreground mb-1">AI Recommendation:</div>
                      <div className="text-sm font-medium">{risk.recommendation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Optimization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Optimized Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { sector: 'Renewable Energy', current: 25, optimal: 35, change: +10 },
                    { sector: 'Technology', current: 30, optimal: 30, change: 0 },
                    { sector: 'Manufacturing', current: 20, optimal: 15, change: -5 },
                    { sector: 'Oil & Gas', current: 15, optimal: 8, change: -7 },
                    { sector: 'Financial Services', current: 10, optimal: 12, change: +2 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{item.sector}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-muted-foreground">{item.current}%</span>
                        <span className="text-xs">→</span>
                        <span className="text-xs font-medium">{item.optimal}%</span>
                        <Badge 
                          variant={item.change > 0 ? 'default' : item.change < 0 ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {item.change > 0 ? '+' : ''}{item.change}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Expected Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-success">Portfolio VaR Improvement</span>
                      <span className="font-bold text-success">-15%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Reduced climate risk exposure</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-primary">Expected Returns</span>
                      <span className="font-bold text-primary">+2.3%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Annual outperformance vs current allocation</p>
                  </div>
                  <div className="p-3 rounded-lg bg-esg-environmental/10 border border-esg-environmental/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-esg-environmental">ESG Score</span>
                      <span className="font-bold text-esg-environmental">85/100</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Improved from current 78/100</p>
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