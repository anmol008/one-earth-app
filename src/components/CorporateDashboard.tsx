import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  TrendingDown, 
  TrendingUp, 
  Factory, 
  Zap, 
  Truck,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Download
} from "lucide-react";

interface CorporateDashboardProps {
  onBack: () => void;
}

export const CorporateDashboard = ({ onBack }: CorporateDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
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
              <h1 className="text-2xl font-bold">NovaChem Inc. - ESG Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                2024 Data
              </Badge>
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
          <p className="text-white/90">Corporate Sustainability Management</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Emissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emissions-high">200,000</div>
              <div className="text-sm text-muted-foreground">tCO2e (2024)</div>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">-8.5% vs 2023</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">ESG Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-esg-environmental">78/100</div>
              <div className="text-sm text-muted-foreground">Good Rating</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">+12 points YoY</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Net Zero Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">34%</div>
              <div className="text-sm text-muted-foreground">Target: 2040</div>
              <Progress value={34} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">12</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-4 h-4 text-success mr-1" />
                <span className="text-sm text-success">8 on track</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emissions Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Factory className="w-5 h-5 mr-2 text-esg-environmental" />
                Emissions by Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Scope 1 (Direct)</span>
                    <span className="text-sm text-emissions-high">50,000 tCO2e</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Scope 2 (Electricity)</span>
                    <span className="text-sm text-emissions-medium">30,000 tCO2e</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Scope 3 (Value Chain)</span>
                    <span className="text-sm text-emissions-high">120,000 tCO2e</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Reduction Targets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-success">2025 Target</span>
                    <Badge variant="secondary" className="bg-success/20 text-success">On Track</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">15% reduction achieved</div>
                  <Progress value={75} className="mt-2" />
                </div>
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-warning">2030 Target</span>
                    <Badge variant="secondary" className="bg-warning/20 text-warning">Needs Attention</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">30% reduction required</div>
                  <Progress value={45} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Initiatives and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-warning" />
                Active Sustainability Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-success/20 bg-success/5">
                  <div>
                    <h4 className="font-medium">Solar Panel Installation</h4>
                    <p className="text-sm text-muted-foreground">3 facilities - Phase 2</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-success text-success-foreground">75% Complete</Badge>
                    <div className="text-sm text-muted-foreground mt-1">Est. 2,500 tCO2e/year</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-warning/20 bg-warning/5">
                  <div>
                    <h4 className="font-medium">EV Fleet Conversion</h4>
                    <p className="text-sm text-muted-foreground">25% of fleet converted</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-warning text-warning-foreground">45% Complete</Badge>
                    <div className="text-sm text-muted-foreground mt-1">Est. 800 tCO2e/year</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <div>
                    <h4 className="font-medium">Energy Efficiency Program</h4>
                    <p className="text-sm text-muted-foreground">LED lighting & HVAC upgrades</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-primary text-primary-foreground">Planning</Badge>
                    <div className="text-sm text-muted-foreground mt-1">Est. 1,200 tCO2e/year</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                Compliance Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-warning mr-2" />
                    <span className="font-medium text-sm">CSRD Report Due</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Submit by March 31, 2025</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span className="font-medium text-sm">GRI Report</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Submitted successfully</p>
                </div>
                <div className="p-3 rounded-lg bg-emissions-high/10 border border-emissions-high/20">
                  <div className="flex items-center mb-2">
                    <Truck className="w-4 h-4 text-emissions-high mr-2" />
                    <span className="font-medium text-sm">Scope 3 Data</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Supply chain data needed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};