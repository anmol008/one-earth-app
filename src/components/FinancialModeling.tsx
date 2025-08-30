import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Calculator,
  Play,
  RefreshCw,
  Target,
  Zap,
  Activity,
  PieChart,
  LineChart,
  Cpu
} from "lucide-react";

export const FinancialModeling = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedModel, setSelectedModel] = useState('monte-carlo');
  const [riskTolerance, setRiskTolerance] = useState([50]);
  const [timeHorizon, setTimeHorizon] = useState([5]);
  const [investmentAmount, setInvestmentAmount] = useState([1000000]);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const simulationResults = {
    monteCarlo: {
      simulations: 10000,
      expectedReturn: 12.4,
      volatility: 18.2,
      varAt95: -8.7,
      varAt99: -15.3,
      scenarios: [
        { percentile: 95, return: 34.2, probability: 5 },
        { percentile: 75, return: 22.1, probability: 25 },
        { percentile: 50, return: 12.4, probability: 50 },
        { percentile: 25, return: 2.8, probability: 75 },
        { percentile: 5, return: -8.7, probability: 95 }
      ]
    },
    blackScholes: {
      optionValue: 45.67,
      delta: 0.68,
      gamma: 0.03,
      theta: -0.12,
      vega: 0.34,
      rho: 0.45
    },
    stressTest: {
      scenarios: [
        { name: 'COVID-19 Repeat', impact: -35.2, probability: 5 },
        { name: '2008 Financial Crisis', impact: -45.8, probability: 3 },
        { name: 'Interest Rate Shock', impact: -18.5, probability: 15 },
        { name: 'Climate Transition', impact: -22.1, probability: 25 },
        { name: 'Tech Bubble Burst', impact: -28.9, probability: 8 }
      ]
    }
  };

  const riskMetrics = [
    { metric: 'Value at Risk (95%)', value: '$2.4M', change: '-0.3%', status: 'good' },
    { metric: 'Expected Shortfall', value: '$4.8M', change: '+0.8%', status: 'warning' },
    { metric: 'Sharpe Ratio', value: '1.38', change: '+0.15', status: 'good' },
    { metric: 'Sortino Ratio', value: '1.85', change: '+0.22', status: 'good' },
    { metric: 'Maximum Drawdown', value: '12.5%', change: '-2.1%', status: 'good' },
    { metric: 'Beta (Market)', value: '1.15', change: '+0.05', status: 'neutral' },
    { metric: 'Alpha', value: '2.8%', change: '+0.7%', status: 'good' },
    { metric: 'Information Ratio', value: '0.67', change: '+0.12', status: 'good' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">AI Financial Modeling</h1>
            <p className="text-muted-foreground">Advanced quantitative analysis and risk modeling</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button onClick={runAnalysis} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            Run Analysis
          </Button>
        </div>
      </div>

      {/* Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Model Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label>Risk Tolerance</Label>
            <div className="mt-2">
              <Slider
                value={riskTolerance}
                onValueChange={setRiskTolerance}
                max={100}
                min={0}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Conservative</span>
                <span>Current: {riskTolerance[0]}%</span>
                <span>Aggressive</span>
              </div>
            </div>
          </div>

          <div>
            <Label>Time Horizon (Years)</Label>
            <div className="mt-2">
              <Slider
                value={timeHorizon}
                onValueChange={setTimeHorizon}
                max={30}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 year</span>
                <span>Current: {timeHorizon[0]} years</span>
                <span>30 years</span>
              </div>
            </div>
          </div>

          <div>
            <Label>Investment Amount</Label>
            <div className="mt-2">
              <Slider
                value={investmentAmount}
                onValueChange={setInvestmentAmount}
                max={10000000}
                min={100000}
                step={100000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$100K</span>
                <span>${(investmentAmount[0] / 1000000).toFixed(1)}M</span>
                <span>$10M</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="monte-carlo" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="monte-carlo">Monte Carlo</TabsTrigger>
          <TabsTrigger value="options">Options Pricing</TabsTrigger>
          <TabsTrigger value="stress-test">Stress Testing</TabsTrigger>
          <TabsTrigger value="risk-metrics">Risk Metrics</TabsTrigger>
        </TabsList>

        {/* Monte Carlo Simulation */}
        <TabsContent value="monte-carlo" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  Simulation Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-primary">
                  <h4 className="font-semibold text-white mb-3">Simulation Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                      <span className="text-sm opacity-90">Simulations:</span>
                      <div className="font-bold">{simulationResults.monteCarlo.simulations.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-sm opacity-90">Expected Return:</span>
                      <div className="font-bold">{simulationResults.monteCarlo.expectedReturn}%</div>
                    </div>
                    <div>
                      <span className="text-sm opacity-90">Volatility:</span>
                      <div className="font-bold">{simulationResults.monteCarlo.volatility}%</div>
                    </div>
                    <div>
                      <span className="text-sm opacity-90">VaR (95%):</span>
                      <div className="font-bold">{simulationResults.monteCarlo.varAt95}%</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {simulationResults.monteCarlo.scenarios.map((scenario, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <span className="text-sm font-medium">{scenario.percentile}th Percentile</span>
                        <div className="text-xs text-muted-foreground">
                          {scenario.probability}% probability
                        </div>
                      </div>
                      <div className={`font-bold ${scenario.return > 0 ? 'text-success' : 'text-destructive'}`}>
                        {scenario.return > 0 ? '+' : ''}{scenario.return}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-warning" />
                  Distribution Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ${((investmentAmount[0] * simulationResults.monteCarlo.expectedReturn / 100) + investmentAmount[0]).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Expected Portfolio Value</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Best Case (95%)', value: 34.2, color: 'bg-success' },
                      { label: 'Good Case (75%)', value: 22.1, color: 'bg-primary' },
                      { label: 'Expected (50%)', value: 12.4, color: 'bg-secondary' },
                      { label: 'Poor Case (25%)', value: 2.8, color: 'bg-warning' },
                      { label: 'Worst Case (5%)', value: -8.7, color: 'bg-destructive' }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.label}</span>
                          <span className="font-medium">{item.value > 0 ? '+' : ''}{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full`} 
                            style={{ width: `${Math.abs(item.value) * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Options Pricing */}
        <TabsContent value="options" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-primary" />
                  Black-Scholes Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 rounded-lg bg-muted">
                  <div className="text-3xl font-bold text-primary">
                    ${simulationResults.blackScholes.optionValue}
                  </div>
                  <div className="text-sm text-muted-foreground">Theoretical Option Value</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { greek: 'Delta', value: simulationResults.blackScholes.delta, desc: 'Price sensitivity' },
                    { greek: 'Gamma', value: simulationResults.blackScholes.gamma, desc: 'Delta sensitivity' },
                    { greek: 'Theta', value: simulationResults.blackScholes.theta, desc: 'Time decay' },
                    { greek: 'Vega', value: simulationResults.blackScholes.vega, desc: 'Volatility sensitivity' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 rounded-lg border">
                      <div className="font-medium">{item.greek}</div>
                      <div className="text-lg font-bold text-primary">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-success" />
                  Sensitivity Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { factor: 'Underlying Price', impact: '+10%', value: '$50.24' },
                    { factor: 'Volatility', impact: '+5%', value: '$47.85' },
                    { factor: 'Time to Expiry', impact: '-1 day', value: '$45.55' },
                    { factor: 'Interest Rate', impact: '+0.5%', value: '$46.12' },
                    { factor: 'Dividend Yield', impact: '+1%', value: '$44.98' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium text-sm">{item.factor}</div>
                        <div className="text-xs text-muted-foreground">{item.impact} change</div>
                      </div>
                      <div className="font-bold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Stress Testing */}
        <TabsContent value="stress-test" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-destructive" />
                Stress Test Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {simulationResults.stressTest.scenarios.map((scenario, index) => (
                    <div key={index} className="p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{scenario.name}</h4>
                        <Badge variant="outline" className="text-destructive border-destructive">
                          {scenario.probability}% likely
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Portfolio Impact</span>
                        <span className="font-bold text-destructive text-lg">{scenario.impact}%</span>
                      </div>
                      <div className="mt-2">
                        <Progress 
                          value={Math.abs(scenario.impact)} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-medium mb-3">Stress Test Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Worst Case Scenario</span>
                        <span className="font-bold text-destructive">-45.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Average Stress Impact</span>
                        <span className="font-bold">-30.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Recovery Time (Est.)</span>
                        <span className="font-bold">18-24 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <h4 className="font-medium text-success mb-2">Mitigation Strategies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Increase diversification across sectors</li>
                      <li>• Add defensive positions (bonds, gold)</li>
                      <li>• Implement dynamic hedging</li>
                      <li>• Reduce leverage during volatility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risk Metrics */}
        <TabsContent value="risk-metrics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{metric.metric}</div>
                      <div className="text-xs text-muted-foreground">Real-time calculation</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{metric.value}</div>
                      <div className={`text-xs ${
                        metric.status === 'good' ? 'text-success' : 
                        metric.status === 'warning' ? 'text-warning' : 'text-muted-foreground'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-primary" />
                AI Risk Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-success mr-2" />
                    <span className="font-medium text-success">Positive Signal</span>
                  </div>
                  <p className="text-sm">Portfolio Sharpe ratio improving consistently over past 3 months.</p>
                </div>
                
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="flex items-center mb-2">
                    <Activity className="w-4 h-4 text-warning mr-2" />
                    <span className="font-medium text-warning">Watch Signal</span>
                  </div>
                  <p className="text-sm">Correlation with market increasing, consider diversification.</p>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-primary mr-2" />
                    <span className="font-medium text-primary">Optimization</span>
                  </div>
                  <p className="text-sm">Consider rebalancing to target 65% equity allocation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};