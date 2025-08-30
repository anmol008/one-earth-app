import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Globe,
  TreePine,
  Zap,
  Droplets,
  Building,
  ArrowUpRight,
  Clock,
  CheckCircle
} from "lucide-react";

export const GreenFinance = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const greenBonds = [
    {
      id: "GB001",
      issuer: "European Investment Bank",
      amount: 500000000,
      coupon: 2.45,
      maturity: "2029-06-15",
      rating: "AAA",
      useOfProceeds: "Renewable Energy",
      impact: "1.2M tons CO2 avoided",
      currency: "EUR",
      status: "Active"
    },
    {
      id: "GB002", 
      issuer: "Apple Inc.",
      amount: 1000000000,
      coupon: 2.85,
      maturity: "2031-08-20",
      rating: "AA+",
      useOfProceeds: "Clean Energy & Forest Protection",
      impact: "3.5M tons CO2 avoided",
      currency: "USD",
      status: "Active"
    },
    {
      id: "GB003",
      issuer: "World Bank",
      amount: 750000000,
      coupon: 1.95,
      maturity: "2028-03-10",
      rating: "AAA",
      useOfProceeds: "Sustainable Water Management",
      impact: "250M liters water saved",
      currency: "USD",
      status: "Active"
    }
  ];

  const sustainabilityLinkedLoans = [
    {
      id: "SLL001",
      borrower: "Unilever PLC",
      amount: 1200000000,
      margin: "SOFR + 185bp",
      maturity: "2027-12-15",
      kpi: "Reduce plastic packaging by 50%",
      progress: 68,
      status: "On Track",
      currency: "USD"
    },
    {
      id: "SLL002",
      borrower: "Iberdrola SA",
      amount: 800000000,
      margin: "EURIBOR + 140bp",
      maturity: "2030-05-20",
      kpi: "Increase renewable capacity to 95%",
      progress: 82,
      status: "Ahead",
      currency: "EUR"
    },
    {
      id: "SLL003",
      borrower: "Siemens AG",
      amount: 600000000,
      margin: "SOFR + 160bp",
      maturity: "2029-09-30",
      kpi: "Carbon neutral operations by 2030",
      progress: 75,
      status: "On Track",
      currency: "USD"
    }
  ];

  const carbonCredits = [
    {
      id: "CC001",
      project: "Amazon Rainforest Conservation",
      type: "REDD+",
      vintage: 2024,
      volume: 150000,
      price: 12.50,
      verification: "VCS",
      region: "Brazil",
      co2Impact: "150,000 tCO2e",
      status: "Available"
    },
    {
      id: "CC002",
      project: "Solar Farm Maharashtra",
      type: "Renewable Energy",
      vintage: 2024,
      volume: 200000,
      price: 8.75,
      verification: "Gold Standard",
      region: "India",
      co2Impact: "200,000 tCO2e",
      status: "Available"
    },
    {
      id: "CC003",
      project: "Biomass Energy Tanzania",
      type: "Clean Cookstoves",
      vintage: 2023,
      volume: 85000,
      price: 15.20,
      verification: "VCS",
      region: "Tanzania",
      co2Impact: "85,000 tCO2e",
      status: "Reserved"
    }
  ];

  const impactInvestments = [
    {
      fund: "ClimateWorks Impact Fund",
      focus: "Climate Technology",
      aum: 2500000000,
      irr: 12.8,
      impactMetric: "25M tons CO2 avoided",
      geography: "Global",
      stage: "Growth",
      status: "Open"
    },
    {
      fund: "Blue Haven Initiative",
      focus: "Ocean Conservation",
      aum: 450000000,
      irr: 9.5,
      impactMetric: "5M hectares protected",
      geography: "Pacific",
      stage: "Venture",
      status: "Limited"
    },
    {
      fund: "Energy Access Fund",
      focus: "Renewable Energy Access",
      aum: 800000000,
      irr: 11.2,
      impactMetric: "2M people energy access",
      geography: "Africa",
      stage: "Infrastructure",
      status: "Open"
    }
  ];

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Available':
      case 'Open':
      case 'On Track':
        return 'bg-green-100 text-green-800';
      case 'Ahead':
        return 'bg-blue-100 text-blue-800';
      case 'Reserved':
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Green Finance Portfolio</h1>
        <p className="text-muted-foreground">
          Sustainable investments and environmental finance tracking
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Total Green Assets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$8.2B</div>
            <div className="text-sm text-muted-foreground">42% of portfolio</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600">+15.3% YoY</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TreePine className="w-4 h-4 mr-2" />
              CO2 Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">12.8M</div>
            <div className="text-sm text-muted-foreground">tons CO2 avoided</div>
            <div className="flex items-center mt-2">
              <Target className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">vs 10M target</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              SDG Alignment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">87%</div>
            <div className="text-sm text-muted-foreground">of investments</div>
            <div className="flex items-center mt-2">
              <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600">13/17 SDGs</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Green Premium
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">+1.2%</div>
            <div className="text-sm text-muted-foreground">vs conventional</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600">Improving</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="green-bonds" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="green-bonds">Green Bonds</TabsTrigger>
          <TabsTrigger value="sustainability-loans">SL Loans</TabsTrigger>
          <TabsTrigger value="carbon-credits">Carbon Credits</TabsTrigger>
          <TabsTrigger value="impact-investments">Impact Investing</TabsTrigger>
        </TabsList>

        {/* Green Bonds */}
        <TabsContent value="green-bonds">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-green-600" />
                Green Bonds Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {greenBonds.map((bond) => (
                  <div key={bond.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{bond.issuer}</h3>
                        <p className="text-sm text-muted-foreground">{bond.id} • {bond.rating}</p>
                      </div>
                      <Badge className={getStatusColor(bond.status)}>
                        {bond.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">{formatCurrency(bond.amount, bond.currency)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Coupon</p>
                        <p className="font-medium">{bond.coupon}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">{bond.maturity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Use of Proceeds</p>
                        <p className="font-medium">{bond.useOfProceeds}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center text-green-600">
                        <TreePine className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{bond.impact}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sustainability-Linked Loans */}
        <TabsContent value="sustainability-loans">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Sustainability-Linked Loans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sustainabilityLinkedLoans.map((loan) => (
                  <div key={loan.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{loan.borrower}</h3>
                        <p className="text-sm text-muted-foreground">{loan.id}</p>
                      </div>
                      <Badge className={getStatusColor(loan.status)}>
                        {loan.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">{formatCurrency(loan.amount, loan.currency)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Margin</p>
                        <p className="font-medium">{loan.margin}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">{loan.maturity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">KPI Target</p>
                        <p className="font-medium text-xs">{loan.kpi}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">KPI Progress</span>
                        <span className="font-medium">{loan.progress}%</span>
                      </div>
                      <Progress value={loan.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Carbon Credits */}
        <TabsContent value="carbon-credits">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-600" />
                Carbon Credits Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carbonCredits.map((credit) => (
                  <div key={credit.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{credit.project}</h3>
                        <p className="text-sm text-muted-foreground">{credit.id} • {credit.type}</p>
                      </div>
                      <Badge className={getStatusColor(credit.status)}>
                        {credit.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Volume</p>
                        <p className="font-medium">{credit.volume.toLocaleString()} credits</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Price</p>
                        <p className="font-medium">${credit.price}/credit</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Verification</p>
                        <p className="font-medium">{credit.verification}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Region</p>
                        <p className="font-medium">{credit.region}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center text-green-600">
                        <TreePine className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{credit.co2Impact}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        Vintage {credit.vintage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Impact Investments */}
        <TabsContent value="impact-investments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Impact Investment Funds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {impactInvestments.map((investment, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{investment.fund}</h3>
                        <p className="text-sm text-muted-foreground">{investment.focus} • {investment.stage}</p>
                      </div>
                      <Badge className={getStatusColor(investment.status)}>
                        {investment.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">AUM</p>
                        <p className="font-medium">{formatCurrency(investment.aum)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">IRR</p>
                        <p className="font-medium">{investment.irr}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Geography</p>
                        <p className="font-medium">{investment.geography}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Impact Metric</p>
                        <p className="font-medium text-xs">{investment.impactMetric}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};