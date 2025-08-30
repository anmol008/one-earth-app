import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  TrendingDown, 
  TrendingUp, 
  PieChart, 
  Target, 
  Shield,
  DollarSign,
  AlertTriangle,
  Leaf,
  BarChart3,
  Globe
} from "lucide-react";

interface FinancialDashboardProps {
  onBack: () => void;
}

export const FinancialDashboard = ({ onBack }: FinancialDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-secondary text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="text-white hover:bg-white/20 mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Greencore Bank - ESG Portfolio Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Portfolio Analysis
              </Badge>
              <Button variant="secondary" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Risk Report
              </Button>
            </div>
          </div>
          <p className="text-white/90">Sustainable Finance Intelligence & ESG Risk Management</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Key Portfolio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Assets Under Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$5.2B</div>
              <div className="text-sm text-muted-foreground">Total AUM</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">+12.3% YoY</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Intensity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emissions-medium">245</div>
              <div className="text-sm text-muted-foreground">tCO2e/$M invested</div>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">-18% vs benchmark</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Green Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-esg-environmental">35%</div>
              <div className="text-sm text-muted-foreground">of portfolio</div>
              <div className="flex items-center mt-2">
                <Target className="w-4 h-4 text-primary mr-1" />
                <span className="text-sm text-primary">Target: 50% by 2030</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Climate VaR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">-2.8%</div>
              <div className="text-sm text-muted-foreground">1.5°C scenario</div>
              <div className="flex items-center mt-2">
                <Shield className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">Low risk exposure</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Composition and Risk Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-esg-social" />
                ESG Portfolio Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center">
                      <div className="w-3 h-3 rounded-full bg-esg-environmental mr-2"></div>
                      Renewable Energy
                    </span>
                    <span className="text-sm text-esg-environmental">35% ($1.82B)</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center">
                      <div className="w-3 h-3 rounded-full bg-esg-social mr-2"></div>
                      Technology & Innovation
                    </span>
                    <span className="text-sm text-esg-social">25% ($1.30B)</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emissions-medium mr-2"></div>
                      Fossil Fuels
                    </span>
                    <span className="text-sm text-emissions-medium">20% ($1.04B)</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                      Other Sectors
                    </span>
                    <span className="text-sm text-primary">20% ($1.04B)</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-warning" />
                Climate Risk Exposure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-success">Physical Risk</span>
                    <Badge variant="secondary" className="bg-success/20 text-success">Low</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Geographic diversification reduces exposure</div>
                  <Progress value={25} className="mt-2" />
                </div>
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-warning">Transition Risk</span>
                    <Badge variant="secondary" className="bg-warning/20 text-warning">Medium</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Fossil fuel exposure requires monitoring</div>
                  <Progress value={45} className="mt-2" />
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-primary">Regulatory Risk</span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">Low</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Strong compliance framework in place</div>
                  <Progress value={20} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Sustainable Finance Section */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-esg-environmental" />
                Sustainable Finance Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg border border-esg-environmental/20 bg-esg-environmental/5">
                  <h4 className="font-medium text-esg-environmental mb-2">Green Bonds</h4>
                  <div className="text-2xl font-bold">$2.8B</div>
                  <div className="text-sm text-muted-foreground">Outstanding notional</div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-sm text-success">+85% vs 2023</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-esg-social/20 bg-esg-social/5">
                  <h4 className="font-medium text-esg-social mb-2">Sustainability Loans</h4>
                  <div className="text-2xl font-bold">$1.9B</div>
                  <div className="text-sm text-muted-foreground">Active portfolio</div>
                  <div className="flex items-center mt-2">
                    <Target className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary">42 active deals</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <h4 className="font-medium text-primary mb-2">Impact Investments</h4>
                  <div className="text-2xl font-bold">$820M</div>
                  <div className="text-sm text-muted-foreground">Direct investments</div>
                  <div className="flex items-center mt-2">
                    <Leaf className="w-4 h-4 text-esg-environmental mr-1" />
                    <span className="text-sm text-esg-environmental">28 projects funded</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-secondary/20 bg-secondary/5">
                  <h4 className="font-medium text-secondary mb-2">Carbon Credits</h4>
                  <div className="text-2xl font-bold">$450M</div>
                  <div className="text-sm text-muted-foreground">Trading volume (2024)</div>
                  <div className="flex items-center mt-2">
                    <Shield className="w-4 h-4 text-success mr-1" />
                    <span className="text-sm text-success">+125% YoY</span>
                  </div>
                </div>
              </div>

              {/* Detailed Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Revenue by Product Line</h4>
                  <div className="space-y-3">
                    {[
                      { product: 'Green Bond Underwriting', revenue: '$45M', margin: '2.8%', growth: '+65%' },
                      { product: 'Sustainability Loan Origination', revenue: '$38M', margin: '3.2%', growth: '+42%' },
                      { product: 'ESG Advisory Services', revenue: '$28M', margin: '15.5%', growth: '+95%' },
                      { product: 'Carbon Trading', revenue: '$22M', margin: '8.2%', growth: '+180%' },
                      { product: 'Impact Investment Management', revenue: '$18M', margin: '12.8%', growth: '+78%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <span className="font-medium">{item.product}</span>
                          <div className="text-sm text-muted-foreground">Margin: {item.margin}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{item.revenue}</div>
                          <div className="text-sm text-success">{item.growth}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Client Segments</h4>
                  <div className="space-y-3">
                    {[
                      { segment: 'Large Corporate', clients: '85', aum: '$2.1B', avgDeal: '$45M' },
                      { segment: 'Mid-Market', clients: '156', aum: '$1.8B', avgDeal: '$12M' },
                      { segment: 'Financial Institutions', clients: '42', aum: '$850M', avgDeal: '$20M' },
                      { segment: 'Government/Municipal', clients: '28', aum: '$450M', avgDeal: '$16M' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <span className="font-medium">{item.segment}</span>
                          <div className="text-sm text-muted-foreground">{item.clients} clients</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{item.aum}</div>
                          <div className="text-sm text-primary">Avg: {item.avgDeal}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Management and Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                ESG Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { risk: 'Greenwashing Exposure', level: 'Low', exposure: '$125M', mitigation: '3rd party verification', status: 'Monitored' },
                  { risk: 'Stranded Assets Risk', level: 'Medium', exposure: '$890M', mitigation: 'Transition scenarios', status: 'Active' },
                  { risk: 'Regulatory Compliance', level: 'Low', exposure: '$2.1B', mitigation: 'Legal review process', status: 'Compliant' },
                  { risk: 'Reputational Risk', level: 'Medium', exposure: '$450M', mitigation: 'Enhanced due diligence', status: 'Monitored' }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{item.risk}</h4>
                      <Badge className={
                        item.level === 'Low' ? 'bg-success text-white' :
                        item.level === 'Medium' ? 'bg-warning text-white' :
                        'bg-destructive text-white'
                      }>
                        {item.level} Risk
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Exposure:</span>
                        <div className="font-medium">{item.exposure}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <div className="font-medium">{item.status}</div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Mitigation:</span>
                        <div className="font-medium text-primary">{item.mitigation}</div>
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
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Market Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-esg-environmental/10 border border-esg-environmental/20">
                  <h4 className="font-medium text-esg-environmental mb-2">Green Bond Market</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Global Issuance:</span>
                      <div className="font-bold">$520B (2024)</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Our Market Share:</span>
                      <div className="font-bold text-esg-environmental">2.8%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avg Spread:</span>
                      <div className="font-bold">-12 bps vs vanilla</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Growth Rate:</span>
                      <div className="font-bold text-success">+35% YoY</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2">Carbon Credit Prices</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">EU ETS:</span>
                      <div className="font-bold">€85/tCO2e</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">California:</span>
                      <div className="font-bold">$32/tCO2e</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Voluntary (VCS):</span>
                      <div className="font-bold">$15/tCO2e</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">YoY Change:</span>
                      <div className="font-bold text-success">+45%</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <h4 className="font-medium text-secondary mb-2">ESG Regulation Pipeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CSRD Implementation</span>
                      <Badge variant="outline">Q1 2025</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>EU Taxonomy Updates</span>
                      <Badge variant="outline">Q3 2025</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>SEC Climate Rules</span>
                      <Badge variant="outline">Q2 2025</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Green Finance and Net Zero Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Pipeline & Deal Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: 'Tesla Gigafactory 5', type: 'Green Bond', amount: '$2.5B', stage: 'Due Diligence', probability: '75%', timeline: 'Q1 2025' },
                  { client: 'Ørsted Wind Farm', type: 'Project Finance', amount: '$1.8B', stage: 'Term Sheet', probability: '90%', timeline: 'Q2 2025' },
                  { client: 'Unilever Sustainability', type: 'SLL Refinancing', amount: '$850M', stage: 'Documentation', probability: '95%', timeline: 'Q1 2025' },
                  { client: 'Microsoft Carbon Removal', type: 'Impact Investment', amount: '$500M', stage: 'Proposal', probability: '60%', timeline: 'Q3 2025' },
                  { client: 'Apple Supplier Program', type: 'Supply Chain Finance', amount: '$1.2B', stage: 'Negotiation', probability: '80%', timeline: 'Q2 2025' }
                ].map((deal, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{deal.client}</h4>
                      <Badge className={
                        deal.probability >= '90%' ? 'bg-success text-white' :
                        deal.probability >= '75%' ? 'bg-primary text-white' :
                        'bg-warning text-white'
                      }>
                        {deal.probability}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Type:</span>
                        <div className="font-medium">{deal.type}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <div className="font-medium">{deal.amount}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stage:</span>
                        <div className="font-medium">{deal.stage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Timeline:</span>
                        <div className="font-medium text-primary">{deal.timeline}</div>
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
                <Target className="w-5 h-5 mr-2 text-primary" />
                Net Zero Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2040</div>
                  <div className="text-sm text-muted-foreground">Net Zero Target</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Carbon Reduction</span>
                      <span className="text-sm text-muted-foreground">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Green Allocation</span>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Fossil Fuel Reduction</span>
                      <span className="text-sm text-muted-foreground">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <Badge className="bg-success text-success-foreground">On Track</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};