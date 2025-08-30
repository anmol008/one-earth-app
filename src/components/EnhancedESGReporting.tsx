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
  Users,
  Brain,
  Play,
  Eye,
  TrendingUp,
  Award
} from "lucide-react";

export const EnhancedESGReporting = () => {
  const [selectedFramework, setSelectedFramework] = useState<string>('all');
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const reportTemplates = [
    {
      id: 'csrd-2024',
      name: 'Corporate Sustainability Reporting Directive',
      framework: 'CSRD',
      status: 'in-progress',
      dueDate: '2025-03-31',
      completion: 78,
      lastUpdated: '2024-12-15',
      sections: 12,
      completedSections: 9,
      aiScore: 85,
      compliance: 92
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
      completedSections: 8,
      aiScore: 94,
      compliance: 98
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
      completedSections: 2,
      aiScore: 72,
      compliance: 78
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
      completedSections: 3,
      aiScore: 88,
      compliance: 89
    }
  ];

  const aiInsights = [
    {
      category: 'Environmental',
      insight: 'Water consumption decreased 15% YoY, exceeding target by 3%',
      impact: 'positive',
      confidence: 94
    },
    {
      category: 'Social',
      insight: 'Gender diversity gap in leadership requires attention',
      impact: 'negative',
      confidence: 87
    },
    {
      category: 'Governance',
      insight: 'Board independence above industry average of 60%',
      impact: 'positive',
      confidence: 98
    },
    {
      category: 'Environmental',
      insight: 'Scope 3 emissions tracking needs improvement',
      impact: 'negative',
      confidence: 91
    }
  ];

  const benchmarkData = [
    { framework: 'CSRD', industryAvg: 72, ourScore: 85, ranking: '15th percentile' },
    { framework: 'GRI', industryAvg: 78, ourScore: 94, ranking: '5th percentile' },
    { framework: 'SASB', industryAvg: 65, ourScore: 72, ranking: '25th percentile' },
    { framework: 'TCFD', industryAvg: 69, ourScore: 88, ranking: '10th percentile' }
  ];

  const automatedReports = [
    {
      type: 'Monthly ESG Dashboard',
      status: 'generated',
      lastRun: '2024-12-20',
      nextRun: '2025-01-20',
      recipients: 12
    },
    {
      type: 'Quarterly Stakeholder Update',
      status: 'scheduled',
      lastRun: '2024-10-01',
      nextRun: '2025-01-01',
      recipients: 45
    },
    {
      type: 'Annual Sustainability Report',
      status: 'in-progress',
      lastRun: '2023-12-31',
      nextRun: '2024-12-31',
      recipients: 234
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': case 'achieved': case 'generated': return 'bg-success text-success-foreground';
      case 'in-progress': case 'on-track': case 'scheduled': return 'bg-primary text-primary-foreground';
      case 'draft': return 'bg-secondary text-secondary-foreground';
      case 'overdue': case 'at-risk': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImpactColor = (impact: string) => {
    return impact === 'positive' ? 'text-success' : 'text-warning';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Enhanced ESG Reporting</h1>
            <p className="text-muted-foreground">AI-powered sustainability reporting and compliance management</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button onClick={generateReport} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Brain className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                AI Generate
              </>
            )}
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">Report quality</div>
            <div className="flex items-center mt-2">
              <Brain className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">ML-powered</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">89%</div>
            <div className="text-sm text-muted-foreground">Average score</div>
            <Progress value={89} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Industry Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">12th</div>
            <div className="text-sm text-muted-foreground">Percentile</div>
            <div className="flex items-center mt-2">
              <Award className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">Top performer</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Auto Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Generated monthly</div>
            <div className="flex items-center mt-2">
              <Play className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">Automated</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">156</div>
            <div className="text-sm text-muted-foreground">Hours/month</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">85% reduction</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="reports">Smart Reports</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Smart Reports */}
        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  AI-Enhanced Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportTemplates.map((report) => (
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
                            <Badge variant="outline" className="text-primary">
                              AI: {report.aiScore}%
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
                          <span>Compliance: {report.compliance}%</span>
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
                  {selectedReport ? `${selectedReport.framework} AI Analysis` : 'Select a Report'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedReport ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-primary">
                      <h4 className="font-medium text-white mb-2">{selectedReport.name}</h4>
                      <div className="grid grid-cols-2 gap-4 text-white">
                        <div>
                          <span className="text-sm opacity-90">AI Quality Score:</span>
                          <div className="font-bold">{selectedReport.aiScore}%</div>
                        </div>
                        <div>
                          <span className="text-sm opacity-90">Compliance:</span>
                          <div className="font-bold">{selectedReport.compliance}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">AI-Generated Sections</h5>
                      {[
                        { section: 'Executive Summary', status: 'completed', quality: 96 },
                        { section: 'Environmental Metrics', status: 'completed', quality: 92 },
                        { section: 'Social Impact Analysis', status: 'in-progress', quality: 88 },
                        { section: 'Governance Framework', status: 'completed', quality: 94 },
                        { section: 'Risk Assessment', status: 'pending', quality: 0 }
                      ].map((section, index) => (
                        <div key={section.section} className="flex items-center justify-between p-3 rounded border">
                          <div>
                            <span className="text-sm font-medium">{section.section}</span>
                            <div className="text-xs text-muted-foreground">
                              {section.status === 'completed' ? `Quality: ${section.quality}%` : section.status}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {section.status === 'completed' ? (
                              <CheckCircle className="w-4 h-4 text-success" />
                            ) : section.status === 'in-progress' ? (
                              <Clock className="w-4 h-4 text-warning" />
                            ) : (
                              <Clock className="w-4 h-4 text-muted-foreground" />
                            )}
                            <Button variant="outline" size="sm">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Brain className="w-4 h-4 mr-2" />
                        Enhance with AI
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a report to view AI analysis and insights</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AI Insights */}
        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  Machine Learning Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{insight.category}</Badge>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm ${getImpactColor(insight.impact)}`}>
                            {insight.impact === 'positive' ? '↗️' : '⚠️'}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {insight.confidence}% confidence
                          </span>
                        </div>
                      </div>
                      <p className="text-sm">{insight.insight}</p>
                      <Progress value={insight.confidence} className="mt-2 h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-warning" />
                  Predictive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <h4 className="font-medium text-success mb-2">Improvement Predictions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ESG score projected to reach 92 by Q2 2025</li>
                      <li>• Water efficiency gains continuing trend</li>
                      <li>• Gender diversity targets achievable by 2025</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <h4 className="font-medium text-warning mb-2">Risk Alerts</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Supply chain ESG risks increasing</li>
                      <li>• Regulatory changes may affect CSRD compliance</li>
                      <li>• Energy costs impacting carbon targets</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <h4 className="font-medium text-primary mb-2">Recommendations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Focus on Scope 3 emissions measurement</li>
                      <li>• Enhance supplier diversity programs</li>
                      <li>• Implement AI-driven energy optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Benchmarks */}
        <TabsContent value="benchmarks" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-success" />
                Industry Benchmarking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benchmarkData.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{item.framework}</h4>
                      <Badge variant="outline">{item.ranking}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Our Score</span>
                          <span className="font-bold text-primary">{item.ourScore}</span>
                        </div>
                        <Progress value={item.ourScore} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Industry Average</span>
                          <span className="font-bold text-muted-foreground">{item.industryAvg}</span>
                        </div>
                        <Progress value={item.industryAvg} className="h-2" />
                      </div>
                      <div className="text-sm text-success">
                        +{item.ourScore - item.industryAvg} points above average
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automation */}
        <TabsContent value="automation" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="w-5 h-5 mr-2 text-primary" />
                Automated Reporting Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automatedReports.map((report, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{report.type}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.recipients} recipients
                        </p>
                      </div>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Last Run:</span>
                        <div className="font-medium">{report.lastRun}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Next Run:</span>
                        <div className="font-medium">{report.nextRun}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Report Generation Time</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">2.5 hrs</div>
                <div className="text-sm text-muted-foreground">Average (85% faster)</div>
                <div className="text-xs text-success mt-2">vs 16 hrs manual</div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-success">97.8%</div>
                <div className="text-sm text-muted-foreground">AI-generated content</div>
                <div className="text-xs text-success mt-2">+12% vs manual</div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-success">$156K</div>
                <div className="text-sm text-muted-foreground">Annual savings</div>
                <div className="text-xs text-success mt-2">ROI: 340%</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};