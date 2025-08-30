import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp,
  Shield,
  Thermometer,
  Droplets,
  Wind,
  MapPin,
  BarChart3,
  Clock,
  Target,
  Globe,
  Zap
} from "lucide-react";

export const RiskAssessment = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('global');
  const [selectedTimeHorizon, setSelectedTimeHorizon] = useState<string>('2030');

  const climateRisks = [
    {
      risk: "Extreme Heat Events",
      type: "Physical - Acute",
      probability: 85,
      impact: "High",
      timeframe: "2025-2030",
      exposure: 2400000000,
      mitigation: "Cooling infrastructure, heat-resistant facilities",
      trend: "increasing",
      geography: "Europe, North America"
    },
    {
      risk: "Sea Level Rise",
      type: "Physical - Chronic", 
      probability: 95,
      impact: "Very High",
      timeframe: "2030-2050",
      exposure: 8500000000,
      mitigation: "Coastal defenses, facility relocation",
      trend: "increasing",
      geography: "Coastal regions globally"
    },
    {
      risk: "Carbon Pricing",
      type: "Transition - Policy",
      probability: 90,
      impact: "Medium",
      timeframe: "2024-2027",
      exposure: 1200000000,
      mitigation: "Carbon efficiency programs, renewable transition",
      trend: "increasing",
      geography: "EU, North America, Asia"
    },
    {
      risk: "Supply Chain Disruption",
      type: "Physical - Acute",
      probability: 70,
      impact: "High",
      timeframe: "2024-2030",
      exposure: 3200000000,
      mitigation: "Supply chain diversification, resilience planning",
      trend: "stable",
      geography: "Southeast Asia, Caribbean"
    },
    {
      risk: "Technology Transition",
      type: "Transition - Technology",
      probability: 80,
      impact: "Medium",
      timeframe: "2025-2035",
      exposure: 1800000000,
      mitigation: "R&D investment, technology partnerships",
      trend: "increasing",
      geography: "Global"
    }
  ];

  const esgRisks = [
    {
      category: "Environmental",
      risk: "Water Scarcity",
      severity: "High",
      likelihood: 75,
      exposure: 1500000000,
      companies: 18,
      mitigation: "Water efficiency, recycling systems",
      timeframe: "2025-2030"
    },
    {
      category: "Social",
      risk: "Labor Rights Violations",
      severity: "Medium",
      likelihood: 35,
      exposure: 450000000,
      companies: 8,
      mitigation: "Supplier audits, training programs",
      timeframe: "Ongoing"
    },
    {
      category: "Governance",
      risk: "Data Privacy Breaches",
      severity: "High",
      likelihood: 60,
      exposure: 2200000000,
      companies: 25,
      mitigation: "Cybersecurity upgrades, compliance training",
      timeframe: "2024-2026"
    },
    {
      category: "Environmental",
      risk: "Biodiversity Loss",
      severity: "Medium",
      likelihood: 85,
      exposure: 800000000,
      companies: 12,
      mitigation: "Conservation partnerships, sustainable sourcing",
      timeframe: "2024-2040"
    },
    {
      category: "Social",
      risk: "Community Displacement",
      severity: "Medium",
      likelihood: 25,
      exposure: 650000000,
      companies: 5,
      mitigation: "Community engagement, relocation support",
      timeframe: "2025-2030"
    }
  ];

  const portfolioRiskMetrics = {
    climateVaR: {
      current: 125000000,
      projected2030: 340000000,
      confidence: 95,
      scenario: "RCP 4.5"
    },
    transitionRisk: {
      carbonExposure: 15.2,
      strandedAssets: 85000000,
      policyRisk: 68,
      technologyRisk: 45
    },
    physicalRisk: {
      acuteRisk: 72,
      chronicRisk: 58,
      waterStress: 35,
      extremeWeather: 81
    }
  };

  const scenarioAnalysis = [
    {
      scenario: "Net Zero 2050",
      probability: 65,
      portfolioImpact: -12.5,
      keyDrivers: ["Carbon pricing", "Technology costs", "Policy support"],
      timeToImpact: "2025-2030"
    },
    {
      scenario: "Delayed Transition",
      probability: 25,
      portfolioImpact: -28.3,
      keyDrivers: ["Policy uncertainty", "Technology barriers", "Economic shocks"],
      timeToImpact: "2030-2040"
    },
    {
      scenario: "Accelerated Transition",
      probability: 10,
      portfolioImpact: +8.7,
      keyDrivers: ["Breakthrough technologies", "Strong policy", "Market momentum"],
      timeToImpact: "2024-2028"
    }
  ];

  const getRiskColor = (level: string | number) => {
    if (typeof level === 'string') {
      switch (level.toLowerCase()) {
        case 'low': return 'text-green-600 bg-green-100';
        case 'medium': return 'text-yellow-600 bg-yellow-100';
        case 'high': return 'text-red-600 bg-red-100';
        case 'very high': return 'text-red-800 bg-red-200';
        default: return 'text-gray-600 bg-gray-100';
      }
    } else {
      if (level < 30) return 'text-green-600 bg-green-100';
      if (level < 60) return 'text-yellow-600 bg-yellow-100';
      if (level < 80) return 'text-red-600 bg-red-100';
      return 'text-red-800 bg-red-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-600" />;
      case 'decreasing': return <TrendingDown className="w-4 h-4 text-green-600" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">ESG Risk Assessment</h1>
        <p className="text-muted-foreground">
          Climate and ESG risk analysis across portfolio holdings
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="global">Global</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia Pacific</SelectItem>
            <SelectItem value="emerging">Emerging Markets</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedTimeHorizon} onValueChange={setSelectedTimeHorizon}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select time horizon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2030">2030</SelectItem>
            <SelectItem value="2040">2040</SelectItem>
            <SelectItem value="2050">2050</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Risk Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Thermometer className="w-4 h-4 mr-2" />
              Climate VaR (95%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {formatCurrency(portfolioRiskMetrics.climateVaR.current)}
            </div>
            <div className="text-sm text-muted-foreground">Current exposure</div>
            <div className="text-xs text-red-600 mt-1">
              Projected 2030: {formatCurrency(portfolioRiskMetrics.climateVaR.projected2030)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Transition Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {portfolioRiskMetrics.transitionRisk.carbonExposure}%
            </div>
            <div className="text-sm text-muted-foreground">Carbon exposure</div>
            <div className="text-xs text-muted-foreground mt-1">
              Policy risk: {portfolioRiskMetrics.transitionRisk.policyRisk}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Droplets className="w-4 h-4 mr-2" />
              Physical Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {portfolioRiskMetrics.physicalRisk.acuteRisk}
            </div>
            <div className="text-sm text-muted-foreground">Acute risk score</div>
            <div className="text-xs text-muted-foreground mt-1">
              Chronic: {portfolioRiskMetrics.physicalRisk.chronicRisk}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Risk Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-sm text-muted-foreground">Assets assessed</div>
            <div className="text-xs text-green-600 mt-1">
              High confidence
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="climate-risks" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="climate-risks">Climate Risks</TabsTrigger>
          <TabsTrigger value="esg-risks">ESG Risks</TabsTrigger>
          <TabsTrigger value="scenario-analysis">Scenarios</TabsTrigger>
          <TabsTrigger value="risk-management">Management</TabsTrigger>
        </TabsList>

        {/* Climate Risks */}
        <TabsContent value="climate-risks">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="w-5 h-5 mr-2 text-red-600" />
                Climate Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {climateRisks.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{risk.risk}</h3>
                        <p className="text-sm text-muted-foreground">{risk.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(risk.trend)}
                        <Badge className={getRiskColor(risk.impact)}>
                          {risk.impact} Impact
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Probability</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={risk.probability} className="h-2 flex-1" />
                          <span className="font-medium">{risk.probability}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Exposure</p>
                        <p className="font-medium">{formatCurrency(risk.exposure)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Timeframe</p>
                        <p className="font-medium">{risk.timeframe}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Geography</p>
                        <p className="font-medium text-xs">{risk.geography}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">Mitigation Strategy</p>
                      <p className="text-sm">{risk.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ESG Risks */}
        <TabsContent value="esg-risks">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                ESG Risk Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {esgRisks.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{risk.risk}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{risk.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {risk.companies} companies affected
                          </span>
                        </div>
                      </div>
                      <Badge className={getRiskColor(risk.severity)}>
                        {risk.severity}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Likelihood</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={risk.likelihood} className="h-2 flex-1" />
                          <span className="font-medium">{risk.likelihood}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Exposure</p>
                        <p className="font-medium">{formatCurrency(risk.exposure)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Timeframe</p>
                        <p className="font-medium">{risk.timeframe}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">Mitigation</p>
                      <p className="text-sm">{risk.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scenario Analysis */}
        <TabsContent value="scenario-analysis">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                Climate Scenario Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scenarioAnalysis.map((scenario, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{scenario.scenario}</h3>
                        <p className="text-sm text-muted-foreground">
                          Probability: {scenario.probability}%
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${scenario.portfolioImpact > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {scenario.portfolioImpact > 0 ? '+' : ''}{scenario.portfolioImpact}%
                        </div>
                        <p className="text-sm text-muted-foreground">Portfolio impact</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Key Drivers</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {scenario.keyDrivers.map((driver, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {driver}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Impact Timeline</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="font-medium">{scenario.timeToImpact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risk Management */}
        <TabsContent value="risk-management">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Risk Mitigation Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Diversification Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduce concentration in high-risk sectors and geographies
                    </p>
                    <div className="flex items-center mt-2">
                      <Progress value={75} className="h-2 flex-1 mr-2" />
                      <span className="text-sm">75% complete</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">ESG Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced ESG screening and engagement programs
                    </p>
                    <div className="flex items-center mt-2">
                      <Progress value={85} className="h-2 flex-1 mr-2" />
                      <span className="text-sm">85% complete</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Climate Hedging</h4>
                    <p className="text-sm text-muted-foreground">
                      Derivative instruments for climate risk protection
                    </p>
                    <div className="flex items-center mt-2">
                      <Progress value={45} className="h-2 flex-1 mr-2" />
                      <span className="text-sm">45% complete</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Risk Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-red-800">High Priority</h4>
                      <p className="text-sm text-red-600">12 risks require immediate attention</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-yellow-800">Medium Priority</h4>
                      <p className="text-sm text-yellow-600">28 risks under monitoring</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Monitor
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-green-800">Low Priority</h4>
                      <p className="text-sm text-green-600">45 risks within tolerance</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Track
                    </Button>
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