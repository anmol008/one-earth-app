import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Download, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Calendar,
  BarChart3,
  Globe,
  Shield,
  Users
} from "lucide-react";

interface ReportTemplate {
  id: string;
  name: string;
  framework: string;
  status: 'completed' | 'in-progress' | 'draft' | 'overdue';
  dueDate: string;
  completion: number;
  lastUpdated: string;
  sections: number;
  completedSections: number;
}

interface ESGMetric {
  category: string;
  metric: string;
  value: string;
  target: string;
  status: 'on-track' | 'at-risk' | 'achieved';
  trend: 'up' | 'down' | 'stable';
}

export const ESGReporting = () => {
  const [selectedFramework, setSelectedFramework] = useState<string>('all');
  const [selectedReport, setSelectedReport] = useState<ReportTemplate | null>(null);

  const reportTemplates: ReportTemplate[] = [
    {
      id: 'csrd-2024',
      name: 'Corporate Sustainability Reporting Directive',
      framework: 'CSRD',
      status: 'in-progress',
      dueDate: '2025-03-31',
      completion: 78,
      lastUpdated: '2024-12-15',
      sections: 12,
      completedSections: 9
    },
    {
      id: 'gri-2024',
      name: 'GRI Standards Report',
      framework: 'GRI',
      status: 'completed',
      dueDate: '2024-12-31',
      completion: 100,
      lastUpdated: '2024-12-20',
      sections: 8,
      completedSections: 8
    },
    {
      id: 'sasb-2024',
      name: 'SASB Industry Standards',
      framework: 'SASB',
      status: 'draft',
      dueDate: '2025-02-28',
      completion: 35,
      lastUpdated: '2024-12-10',
      sections: 6,
      completedSections: 2
    },
    {
      id: 'tcfd-2024',
      name: 'Task Force Climate Disclosures',
      framework: 'TCFD',
      status: 'in-progress',
      dueDate: '2025-01-31',
      completion: 65,
      lastUpdated: '2024-12-18',
      sections: 4,
      completedSections: 3
    },
    {
      id: 'cdp-2024',
      name: 'CDP Climate Change Questionnaire',
      framework: 'CDP',
      status: 'overdue',
      dueDate: '2024-12-15',
      completion: 42,
      lastUpdated: '2024-12-05',
      sections: 10,
      completedSections: 4
    }
  ];

  const esgMetrics: ESGMetric[] = [
    // Environmental
    { category: 'Environmental', metric: 'Total GHG Emissions (Scope 1)', value: '50,000 tCO2e', target: '45,000 tCO2e', status: 'at-risk', trend: 'down' },
    { category: 'Environmental', metric: 'Total GHG Emissions (Scope 2)', value: '30,000 tCO2e', target: '25,000 tCO2e', status: 'on-track', trend: 'down' },
    { category: 'Environmental', metric: 'Renewable Energy Usage', value: '45%', target: '50%', status: 'on-track', trend: 'up' },
    { category: 'Environmental', metric: 'Water Consumption', value: '2.5M m³', target: '2.2M m³', status: 'at-risk', trend: 'stable' },
    { category: 'Environmental', metric: 'Waste Diverted from Landfill', value: '78%', target: '80%', status: 'on-track', trend: 'up' },
    
    // Social
    { category: 'Social', metric: 'Gender Diversity (Leadership)', value: '42%', target: '50%', status: 'on-track', trend: 'up' },
    { category: 'Social', metric: 'Employee Safety (LTIR)', value: '0.85', target: '< 1.0', status: 'achieved', trend: 'down' },
    { category: 'Social', metric: 'Training Hours per Employee', value: '45 hrs', target: '40 hrs', status: 'achieved', trend: 'up' },
    { category: 'Social', metric: 'Employee Engagement Score', value: '78%', target: '75%', status: 'achieved', trend: 'up' },
    
    // Governance
    { category: 'Governance', metric: 'Board Independence', value: '67%', target: '> 60%', status: 'achieved', trend: 'stable' },
    { category: 'Governance', metric: 'ESG-linked Executive Compensation', value: '25%', target: '30%', status: 'on-track', trend: 'up' },
    { category: 'Governance', metric: 'Data Security Incidents', value: '0', target: '0', status: 'achieved', trend: 'stable' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': case 'achieved': return 'bg-success text-success-foreground';
      case 'in-progress': case 'on-track': return 'bg-primary text-primary-foreground';
      case 'draft': return 'bg-secondary text-secondary-foreground';
      case 'overdue': case 'at-risk': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  const filteredReports = selectedFramework === 'all' 
    ? reportTemplates 
    : reportTemplates.filter(r => r.framework === selectedFramework);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">ESG Reporting Center</h1>
            <p className="text-muted-foreground">Comprehensive sustainability reporting and compliance management</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedFramework} onValueChange={setSelectedFramework}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frameworks</SelectItem>
              <SelectItem value="CSRD">CSRD</SelectItem>
              <SelectItem value="GRI">GRI</SelectItem>
              <SelectItem value="SASB">SASB</SelectItem>
              <SelectItem value="TCFD">TCFD</SelectItem>
              <SelectItem value="CDP">CDP</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">In progress</div>
            <div className="flex items-center mt-2">
              <CheckCircle className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">2 completed</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">64%</div>
            <div className="text-sm text-muted-foreground">Across all reports</div>
            <Progress value={64} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Due This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">2</div>
            <div className="text-sm text-muted-foreground">Reports pending</div>
            <div className="flex items-center mt-2">
              <AlertTriangle className="w-4 h-4 text-warning mr-1" />
              <span className="text-sm text-warning">1 overdue</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">ESG Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">78/100</div>
            <div className="text-sm text-muted-foreground">Good rating</div>
            <div className="flex items-center mt-2">
              <BarChart3 className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">+5 vs last year</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList>
          <TabsTrigger value="reports">Report Templates</TabsTrigger>
          <TabsTrigger value="metrics">ESG Metrics</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-6">
          {/* Report Templates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Reporting Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <div 
                      key={report.id} 
                      className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer"
                      onClick={() => setSelectedReport(report)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium">{report.framework}</h4>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{report.name}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{report.completion}%</div>
                          <div className="text-xs text-muted-foreground">
                            {report.completedSections}/{report.sections} sections
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={report.completion} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Due: {report.dueDate}</span>
                          <span>Updated: {report.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Report Detail */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>
                  {selectedReport ? `${selectedReport.framework} Details` : 'Select a Report'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedReport ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-medium mb-2">{selectedReport.name}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Status:</span>
                          <Badge className={`ml-2 ${getStatusColor(selectedReport.status)}`}>
                            {selectedReport.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Due Date:</span>
                          <span className="ml-2">{selectedReport.dueDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Progress:</span>
                          <span className="ml-2">{selectedReport.completion}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="ml-2">{selectedReport.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">Report Sections</h5>
                      {[
                        'Organizational Profile',
                        'Strategy & Analysis',
                        'Governance Structure',
                        'Risk Management',
                        'Environmental Metrics',
                        'Social Performance',
                        'Economic Impact',
                        'Stakeholder Engagement'
                      ].map((section, index) => (
                        <div key={section} className="flex items-center justify-between p-2 rounded border">
                          <span className="text-sm">{section}</span>
                          {index < selectedReport.completedSections ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <Clock className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Edit Report
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a report template to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          {/* ESG Metrics */}
          <div className="grid grid-cols-1 gap-6">
            {['Environmental', 'Social', 'Governance'].map((category) => (
              <Card key={category} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {category === 'Environmental' && <Globe className="w-5 h-5 mr-2 text-esg-environmental" />}
                    {category === 'Social' && <Users className="w-5 h-5 mr-2 text-esg-social" />}
                    {category === 'Governance' && <Shield className="w-5 h-5 mr-2 text-esg-governance" />}
                    {category} Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {esgMetrics.filter(m => m.category === category).map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{metric.metric}</div>
                          <div className="text-xs text-muted-foreground">Target: {metric.target}</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{metric.value}</span>
                            <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                          </div>
                          <Badge className={getStatusColor(metric.status)}>
                            {metric.status.replace('-', ' ')}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          {/* Compliance Timeline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Compliance Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: '2024-12-31', task: 'GRI Standards Report', status: 'completed', framework: 'GRI' },
                  { date: '2025-01-15', task: 'SASB Data Collection', status: 'upcoming', framework: 'SASB' },
                  { date: '2025-01-31', task: 'TCFD Climate Disclosure', status: 'in-progress', framework: 'TCFD' },
                  { date: '2025-02-28', task: 'SASB Report Submission', status: 'upcoming', framework: 'SASB' },
                  { date: '2025-03-31', task: 'CSRD Report Due', status: 'upcoming', framework: 'CSRD' },
                  { date: '2025-04-15', task: 'CDP Climate Questionnaire', status: 'upcoming', framework: 'CDP' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border border-border">
                    <div className="text-sm font-medium text-muted-foreground min-w-[100px]">
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.task}</div>
                      <Badge variant="outline" className="mt-1">
                        {item.framework}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.replace('-', ' ')}
                    </Badge>
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