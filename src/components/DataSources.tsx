import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Database, 
  Cloud, 
  Wifi, 
  Server, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Zap,
  Factory,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  RefreshCw,
  Download,
  Upload
} from "lucide-react";

interface DataSource {
  id: string;
  name: string;
  type: 'erp' | 'iot' | 'cloud' | 'hr' | 'finance' | 'facility' | 'manual';
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: string;
  dataPoints: number;
  frequency: string;
  description: string;
  metrics: string[];
  reliability: number;
  coverage: number;
}

interface DataMetric {
  source: string;
  metric: string;
  value: string;
  lastUpdated: string;
  status: 'current' | 'stale' | 'missing';
  category: 'energy' | 'emissions' | 'waste' | 'water' | 'social' | 'governance';
}

export const DataSources = () => {
  const [selectedSource, setSelectedSource] = useState<DataSource | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const dataSources: DataSource[] = [
    {
      id: 'sap-erp',
      name: 'SAP ERP System',
      type: 'erp',
      status: 'connected',
      lastSync: '2024-12-20 14:30',
      dataPoints: 15420,
      frequency: 'Hourly',
      description: 'Enterprise resource planning system providing procurement, inventory, and operational data',
      metrics: ['Energy Consumption', 'Material Usage', 'Transportation', 'Waste Generation'],
      reliability: 98,
      coverage: 85
    },
    {
      id: 'aws-cloud',
      name: 'AWS Cloud Infrastructure',
      type: 'cloud',
      status: 'connected',
      lastSync: '2024-12-20 14:35',
      dataPoints: 8760,
      frequency: 'Real-time',
      description: 'Amazon Web Services cloud computing usage and energy consumption data',
      metrics: ['Cloud Energy Usage', 'Data Transfer', 'Compute Hours', 'Storage Usage'],
      reliability: 99,
      coverage: 100
    },
    {
      id: 'iot-sensors',
      name: 'IoT Energy Sensors',
      type: 'iot',
      status: 'syncing',
      lastSync: '2024-12-20 14:28',
      dataPoints: 52800,
      frequency: 'Every 5 minutes',
      description: 'Industrial IoT sensors monitoring energy consumption across manufacturing facilities',
      metrics: ['Electricity Usage', 'Natural Gas', 'Steam Consumption', 'Compressed Air'],
      reliability: 94,
      coverage: 78
    },
    {
      id: 'workday-hr',
      name: 'Workday HR System',
      type: 'hr',
      status: 'connected',
      lastSync: '2024-12-20 09:00',
      dataPoints: 2340,
      frequency: 'Daily',
      description: 'Human resources system providing employee demographics and engagement data',
      metrics: ['Employee Count', 'Diversity Metrics', 'Training Hours', 'Safety Incidents'],
      reliability: 96,
      coverage: 95
    },
    {
      id: 'oracle-finance',
      name: 'Oracle Financial System',
      type: 'finance',
      status: 'connected',
      lastSync: '2024-12-20 12:00',
      dataPoints: 4680,
      frequency: 'Daily',
      description: 'Financial management system for ESG investment and expenditure tracking',
      metrics: ['Sustainability Investments', 'Green Bonds', 'ESG Compliance Costs', 'Carbon Credits'],
      reliability: 97,
      coverage: 90
    },
    {
      id: 'bms-facility',
      name: 'Building Management System',
      type: 'facility',
      status: 'error',
      lastSync: '2024-12-19 16:45',
      dataPoints: 0,
      frequency: 'Real-time',
      description: 'Building automation system for HVAC, lighting, and facility operations',
      metrics: ['HVAC Energy', 'Lighting Consumption', 'Water Usage', 'Occupancy Data'],
      reliability: 85,
      coverage: 60
    },
    {
      id: 'manual-uploads',
      name: 'Manual Data Uploads',
      type: 'manual',
      status: 'disconnected',
      lastSync: '2024-12-18 10:30',
      dataPoints: 450,
      frequency: 'Monthly',
      description: 'Manually uploaded spreadsheets and documents for supplier and travel data',
      metrics: ['Supplier Emissions', 'Business Travel', 'Vendor Assessments', 'External Audits'],
      reliability: 75,
      coverage: 40
    }
  ];

  const dataMetrics: DataMetric[] = [
    // Energy
    { source: 'AWS Cloud', metric: 'Cloud Energy Usage', value: '125,340 kWh', lastUpdated: '2024-12-20 14:35', status: 'current', category: 'energy' },
    { source: 'IoT Sensors', metric: 'Facility Electricity', value: '450,120 kWh', lastUpdated: '2024-12-20 14:30', status: 'current', category: 'energy' },
    { source: 'IoT Sensors', metric: 'Natural Gas', value: '85,400 m³', lastUpdated: '2024-12-20 14:30', status: 'current', category: 'energy' },
    { source: 'BMS', metric: 'HVAC Energy', value: 'No Data', lastUpdated: '2024-12-19 16:45', status: 'missing', category: 'energy' },
    
    // Emissions
    { source: 'SAP ERP', metric: 'Scope 3 Transport', value: '12,500 tCO2e', lastUpdated: '2024-12-20 09:00', status: 'current', category: 'emissions' },
    { source: 'Manual Upload', metric: 'Supplier Emissions', value: '85,000 tCO2e', lastUpdated: '2024-12-18 10:30', status: 'stale', category: 'emissions' },
    
    // Water & Waste
    { source: 'IoT Sensors', metric: 'Water Consumption', value: '15,600 m³', lastUpdated: '2024-12-20 14:25', status: 'current', category: 'water' },
    { source: 'SAP ERP', metric: 'Waste Generation', value: '450 tonnes', lastUpdated: '2024-12-20 14:30', status: 'current', category: 'waste' },
    
    // Social
    { source: 'Workday HR', metric: 'Gender Diversity', value: '42%', lastUpdated: '2024-12-20 09:00', status: 'current', category: 'social' },
    { source: 'Workday HR', metric: 'Safety Incidents', value: '3', lastUpdated: '2024-12-20 09:00', status: 'current', category: 'social' },
    
    // Governance
    { source: 'Oracle Finance', metric: 'ESG Investments', value: '$2.5M', lastUpdated: '2024-12-20 12:00', status: 'current', category: 'governance' },
    { source: 'Oracle Finance', metric: 'Carbon Credits', value: '1,250 tonnes', lastUpdated: '2024-12-20 12:00', status: 'current', category: 'governance' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'erp': return <Database className="w-4 h-4 text-primary" />;
      case 'cloud': return <Cloud className="w-4 h-4 text-esg-social" />;
      case 'iot': return <Wifi className="w-4 h-4 text-warning" />;
      case 'hr': return <Users className="w-4 h-4 text-esg-social" />;
      case 'finance': return <DollarSign className="w-4 h-4 text-esg-governance" />;
      case 'facility': return <Factory className="w-4 h-4 text-esg-environmental" />;
      case 'manual': return <FileText className="w-4 h-4 text-secondary" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-success text-success-foreground';
      case 'syncing': return 'bg-primary text-primary-foreground';
      case 'disconnected': return 'bg-secondary text-secondary-foreground';
      case 'error': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'syncing': return <RefreshCw className="w-4 h-4 text-primary animate-spin" />;
      case 'disconnected': return <AlertTriangle className="w-4 h-4 text-secondary" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-destructive" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'text-success';
      case 'stale': return 'text-warning';
      case 'missing': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const filteredSources = filterType === 'all' 
    ? dataSources 
    : dataSources.filter(source => source.type === filterType);

  const connectedSources = dataSources.filter(s => s.status === 'connected').length;
  const totalDataPoints = dataSources.reduce((sum, s) => sum + s.dataPoints, 0);
  const avgReliability = Math.round(dataSources.reduce((sum, s) => sum + s.reliability, 0) / dataSources.length);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Database className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Data Sources & Integrations</h1>
            <p className="text-muted-foreground">Monitor and manage your ESG data collection infrastructure</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Connected Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{connectedSources}</div>
            <div className="text-sm text-muted-foreground">of {dataSources.length} total sources</div>
            <div className="flex items-center mt-2">
              <CheckCircle className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">{Math.round((connectedSources / dataSources.length) * 100)}% uptime</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Data Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{(totalDataPoints / 1000).toFixed(0)}k</div>
            <div className="text-sm text-muted-foreground">Collected this month</div>
            <div className="flex items-center mt-2">
              <BarChart3 className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">+23% vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Reliability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">{avgReliability}%</div>
            <div className="text-sm text-muted-foreground">Across all sources</div>
            <Progress value={avgReliability} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Data Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-social">82%</div>
            <div className="text-sm text-muted-foreground">ESG metrics covered</div>
            <div className="flex items-center mt-2">
              <Zap className="w-4 h-4 text-warning mr-1" />
              <span className="text-sm text-warning">3 gaps identified</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sources" className="space-y-6">
        <TabsList>
          <TabsTrigger value="sources">Data Sources</TabsTrigger>
          <TabsTrigger value="metrics">Live Metrics</TabsTrigger>
          <TabsTrigger value="quality">Data Quality</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-6">
          {/* Filter Tabs */}
          <div className="flex space-x-2 overflow-x-auto">
            {['all', 'erp', 'cloud', 'iot', 'hr', 'finance', 'facility', 'manual'].map((type) => (
              <Button
                key={type}
                variant={filterType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType(type)}
                className="whitespace-nowrap"
              >
                {type === 'all' ? 'All Sources' : type.toUpperCase()}
              </Button>
            ))}
          </div>

          {/* Data Sources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Available Sources</h3>
              {filteredSources.map((source) => (
                <Card 
                  key={source.id} 
                  className="shadow-card hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedSource(source)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getTypeIcon(source.type)}
                        <div>
                          <h4 className="font-medium">{source.name}</h4>
                          <p className="text-sm text-muted-foreground">{source.type.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(source.status)}
                        <Badge className={getStatusColor(source.status)}>
                          {source.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{source.description}</p>
                    
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Data Points</span>
                        <div className="font-medium">{source.dataPoints.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Frequency</span>
                        <div className="font-medium">{source.frequency}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Reliability</span>
                        <div className="font-medium">{source.reliability}%</div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-muted-foreground">
                      Last sync: {source.lastSync}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Source Details */}
            <div>
              <h3 className="text-lg font-medium mb-4">Source Details</h3>
              {selectedSource ? (
                <Card className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        {getTypeIcon(selectedSource.type)}
                        <span>{selectedSource.name}</span>
                      </CardTitle>
                      <Switch checked={selectedSource.status === 'connected'} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{selectedSource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Reliability</label>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Uptime</span>
                            <span>{selectedSource.reliability}%</span>
                          </div>
                          <Progress value={selectedSource.reliability} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Coverage</label>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Metrics</span>
                            <span>{selectedSource.coverage}%</span>
                          </div>
                          <Progress value={selectedSource.coverage} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Metrics Collected</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedSource.metrics.map((metric) => (
                          <Badge key={metric} variant="outline">{metric}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="text-muted-foreground">Status</label>
                        <div className="font-medium flex items-center space-x-2">
                          {getStatusIcon(selectedSource.status)}
                          <span>{selectedSource.status}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-muted-foreground">Frequency</label>
                        <div className="font-medium">{selectedSource.frequency}</div>
                      </div>
                      <div>
                        <label className="text-muted-foreground">Data Points</label>
                        <div className="font-medium">{selectedSource.dataPoints.toLocaleString()}</div>
                      </div>
                      <div>
                        <label className="text-muted-foreground">Last Sync</label>
                        <div className="font-medium">{selectedSource.lastSync}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Sync Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-card">
                  <CardContent className="text-center py-12">
                    <Database className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Select a Data Source</h3>
                    <p className="text-muted-foreground">Choose a data source to view configuration and metrics</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          {/* Live Metrics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Live Data Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex-1">
                      <div className="font-medium">{metric.metric}</div>
                      <div className="text-sm text-muted-foreground">Source: {metric.source}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{metric.value}</div>
                      <div className={`text-xs ${getMetricStatusColor(metric.status)}`}>
                        {metric.status} • {metric.lastUpdated}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          {/* Data Quality Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Data Quality Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-esg-environmental mb-2">87%</div>
                  <div className="text-muted-foreground">Overall Quality</div>
                </div>
                <div className="space-y-3 mt-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Completeness</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Timeliness</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Consistency</span>
                      <span>83%</span>
                    </div>
                    <Progress value={83} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Data Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: 'Missing Data', count: 5, severity: 'high' },
                    { type: 'Stale Data', count: 12, severity: 'medium' },
                    { type: 'Validation Errors', count: 3, severity: 'high' },
                    { type: 'Duplicate Records', count: 8, severity: 'low' },
                    { type: 'Format Issues', count: 15, severity: 'medium' }
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className={`w-4 h-4 ${issue.severity === 'high' ? 'text-destructive' : issue.severity === 'medium' ? 'text-warning' : 'text-muted-foreground'}`} />
                        <span className="font-medium">{issue.type}</span>
                      </div>
                      <Badge variant={issue.severity === 'high' ? 'destructive' : issue.severity === 'medium' ? 'default' : 'secondary'}>
                        {issue.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};