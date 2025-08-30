import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Target, 
  Zap, 
  Truck, 
  Leaf, 
  Factory, 
  Users, 
  TrendingUp,
  Calendar,
  DollarSign,
  Plus,
  Search,
  Filter
} from "lucide-react";

interface Initiative {
  id: string;
  title: string;
  category: 'energy' | 'waste' | 'transport' | 'water' | 'social' | 'governance';
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  progress: number;
  startDate: string;
  targetDate: string;
  budget: number;
  spent: number;
  impactMetric: string;
  estimatedImpact: number;
  actualImpact?: number;
  responsibleTeam: string;
  location: string;
  description: string;
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  targetDate: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'overdue';
  description: string;
}

export const Initiatives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const initiatives: Initiative[] = [
    {
      id: 'init-001',
      title: 'Solar Panel Installation Program',
      category: 'energy',
      status: 'in-progress',
      progress: 75,
      startDate: '2024-01-15',
      targetDate: '2024-12-31',
      budget: 2500000,
      spent: 1875000,
      impactMetric: 'tCO2e reduction/year',
      estimatedImpact: 2500,
      actualImpact: 1875,
      responsibleTeam: 'Facilities & Engineering',
      location: 'Manufacturing Sites A, B, C',
      description: 'Installation of 5MW solar capacity across three manufacturing facilities to reduce grid dependency and carbon emissions.',
      milestones: [
        { id: 'm1', title: 'Site Assessment Complete', targetDate: '2024-02-28', status: 'completed', description: 'Technical feasibility and structural analysis' },
        { id: 'm2', title: 'Permit Approval', targetDate: '2024-04-15', status: 'completed', description: 'All regulatory permits obtained' },
        { id: 'm3', title: 'Installation Phase 1', targetDate: '2024-07-31', status: 'completed', description: 'Site A installation complete' },
        { id: 'm4', title: 'Installation Phase 2', targetDate: '2024-10-31', status: 'in-progress', description: 'Sites B & C installation' },
        { id: 'm5', title: 'Grid Connection & Testing', targetDate: '2024-12-15', status: 'upcoming', description: 'Final commissioning and testing' }
      ]
    },
    {
      id: 'init-002',
      title: 'Electric Vehicle Fleet Conversion',
      category: 'transport',
      status: 'in-progress',
      progress: 45,
      startDate: '2024-03-01',
      targetDate: '2025-08-31',
      budget: 1200000,
      spent: 540000,
      impactMetric: 'tCO2e reduction/year',
      estimatedImpact: 800,
      actualImpact: 360,
      responsibleTeam: 'Fleet Management',
      location: 'Corporate Fleet - All Regions',
      description: 'Replace 25% of company fleet (50 vehicles) with electric vehicles and install charging infrastructure.',
      milestones: [
        { id: 'm1', title: 'Vehicle Selection & Procurement', targetDate: '2024-05-31', status: 'completed', description: 'EV models selected and orders placed' },
        { id: 'm2', title: 'Charging Infrastructure Phase 1', targetDate: '2024-08-31', status: 'completed', description: 'HQ and regional office chargers installed' },
        { id: 'm3', title: 'Fleet Replacement Phase 1', targetDate: '2024-11-30', status: 'in-progress', description: '20 vehicles delivered and operational' },
        { id: 'm4', title: 'Driver Training Program', targetDate: '2025-02-28', status: 'upcoming', description: 'EV operation and maintenance training' },
        { id: 'm5', title: 'Full Fleet Conversion', targetDate: '2025-08-31', status: 'upcoming', description: 'All 50 vehicles operational' }
      ]
    },
    {
      id: 'init-003',
      title: 'Waste Reduction & Circular Economy',
      category: 'waste',
      status: 'planning',
      progress: 15,
      startDate: '2024-10-01',
      targetDate: '2025-12-31',
      budget: 800000,
      spent: 120000,
      impactMetric: '% waste diverted',
      estimatedImpact: 25,
      responsibleTeam: 'Operations & Sustainability',
      location: 'All Manufacturing Sites',
      description: 'Implement circular economy principles to reduce waste generation by 25% and increase recycling rates.',
      milestones: [
        { id: 'm1', title: 'Waste Audit & Analysis', targetDate: '2024-12-31', status: 'in-progress', description: 'Complete waste stream analysis' },
        { id: 'm2', title: 'Recycling Partner Selection', targetDate: '2025-02-28', status: 'upcoming', description: 'Identify and contract recycling partners' },
        { id: 'm3', title: 'Process Redesign', targetDate: '2025-06-30', status: 'upcoming', description: 'Implement waste reduction processes' },
        { id: 'm4', title: 'Staff Training & Rollout', targetDate: '2025-09-30', status: 'upcoming', description: 'Train staff and implement new procedures' },
        { id: 'm5', title: 'Performance Monitoring', targetDate: '2025-12-31', status: 'upcoming', description: 'Track and optimize performance' }
      ]
    },
    {
      id: 'init-004',
      title: 'Water Conservation Program',
      category: 'water',
      status: 'completed',
      progress: 100,
      startDate: '2023-06-01',
      targetDate: '2024-05-31',
      budget: 450000,
      spent: 420000,
      impactMetric: '% water reduction',
      estimatedImpact: 30,
      actualImpact: 35,
      responsibleTeam: 'Facilities Management',
      location: 'Manufacturing Site A',
      description: 'Install water recycling systems and efficient fixtures to reduce water consumption by 30%.',
      milestones: [
        { id: 'm1', title: 'Water Audit', targetDate: '2023-08-31', status: 'completed', description: 'Baseline water usage assessment' },
        { id: 'm2', title: 'System Design', targetDate: '2023-11-30', status: 'completed', description: 'Recycling system engineering' },
        { id: 'm3', title: 'Installation', targetDate: '2024-02-28', status: 'completed', description: 'Water recycling system installation' },
        { id: 'm4', title: 'Testing & Optimization', targetDate: '2024-04-30', status: 'completed', description: 'System testing and fine-tuning' },
        { id: 'm5', title: 'Performance Validation', targetDate: '2024-05-31', status: 'completed', description: 'Achieved 35% reduction target' }
      ]
    },
    {
      id: 'init-005',
      title: 'Diversity & Inclusion Program',
      category: 'social',
      status: 'in-progress',
      progress: 60,
      startDate: '2024-01-01',
      targetDate: '2025-12-31',
      budget: 300000,
      spent: 180000,
      impactMetric: '% leadership diversity',
      estimatedImpact: 50,
      actualImpact: 42,
      responsibleTeam: 'Human Resources',
      location: 'Global - All Offices',
      description: 'Comprehensive program to increase leadership diversity to 50% and improve inclusive workplace culture.',
      milestones: [
        { id: 'm1', title: 'Diversity Assessment', targetDate: '2024-03-31', status: 'completed', description: 'Current state analysis and gap identification' },
        { id: 'm2', title: 'Training Program Launch', targetDate: '2024-06-30', status: 'completed', description: 'Unconscious bias and inclusive leadership training' },
        { id: 'm3', title: 'Recruitment Process Update', targetDate: '2024-09-30', status: 'completed', description: 'Inclusive hiring practices implementation' },
        { id: 'm4', title: 'Mentorship Program', targetDate: '2025-03-31', status: 'in-progress', description: 'Launch diversity mentorship initiatives' },
        { id: 'm5', title: 'Culture Transformation', targetDate: '2025-12-31', status: 'upcoming', description: 'Achieve target diversity metrics' }
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'energy': return <Zap className="w-4 h-4 text-warning" />;
      case 'transport': return <Truck className="w-4 h-4 text-primary" />;
      case 'waste': return <Leaf className="w-4 h-4 text-esg-environmental" />;
      case 'water': return <Factory className="w-4 h-4 text-esg-social" />;
      case 'social': return <Users className="w-4 h-4 text-esg-social" />;
      case 'governance': return <Target className="w-4 h-4 text-esg-governance" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-primary text-primary-foreground';
      case 'planning': return 'bg-secondary text-secondary-foreground';
      case 'on-hold': return 'bg-warning text-warning-foreground';
      case 'overdue': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getMilestoneColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-primary';
      case 'upcoming': return 'text-muted-foreground';
      case 'overdue': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const filteredInitiatives = initiatives.filter(initiative => {
    const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || initiative.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || initiative.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalBudget = initiatives.reduce((sum, init) => sum + init.budget, 0);
  const totalSpent = initiatives.reduce((sum, init) => sum + init.spent, 0);
  const totalEstimatedImpact = initiatives.reduce((sum, init) => sum + init.estimatedImpact, 0);
  const totalActualImpact = initiatives.reduce((sum, init) => sum + (init.actualImpact || 0), 0);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Sustainability Initiatives</h1>
            <p className="text-muted-foreground">Track and manage your organization's sustainability projects</p>
          </div>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Initiative
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${(totalBudget / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-muted-foreground">Allocated across {initiatives.length} initiatives</div>
            <div className="flex items-center mt-2">
              <DollarSign className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">${(totalSpent / 1000000).toFixed(1)}M spent</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">{initiatives.filter(i => i.status === 'in-progress').length}</div>
            <div className="text-sm text-muted-foreground">Currently in progress</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm text-primary">{initiatives.filter(i => i.status === 'completed').length} completed</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Estimated Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-esg-environmental">{totalEstimatedImpact.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">tCO2e reduction potential</div>
            <div className="flex items-center mt-2">
              <Leaf className="w-4 h-4 text-success mr-1" />
              <span className="text-sm text-success">{totalActualImpact.toLocaleString()} achieved</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {Math.round(initiatives.reduce((sum, init) => sum + init.progress, 0) / initiatives.length)}%
            </div>
            <div className="text-sm text-muted-foreground">Across all initiatives</div>
            <Progress 
              value={initiatives.reduce((sum, init) => sum + init.progress, 0) / initiatives.length} 
              className="mt-2" 
            />
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Initiatives</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Category</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="waste">Waste</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="governance">Governance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Detailed View</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Initiative Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInitiatives.map((initiative) => (
              <Card key={initiative.id} className="shadow-card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedInitiative(initiative)}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(initiative.category)}
                      <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    </div>
                    <Badge className={getStatusColor(initiative.status)}>
                      {initiative.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Budget:</span>
                      <div className="font-medium">${(initiative.budget / 1000).toLocaleString()}k</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Impact:</span>
                      <div className="font-medium">{initiative.estimatedImpact} {initiative.impactMetric}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Target Date:</span>
                      <div className="font-medium">{initiative.targetDate}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Team:</span>
                      <div className="font-medium">{initiative.responsibleTeam}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          {selectedInitiative ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Initiative Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        {getCategoryIcon(selectedInitiative.category)}
                        <span>{selectedInitiative.title}</span>
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{selectedInitiative.description}</p>
                    </div>
                    <Badge className={getStatusColor(selectedInitiative.status)}>
                      {selectedInitiative.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Progress</Label>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Progress</span>
                          <span>{selectedInitiative.progress}%</span>
                        </div>
                        <Progress value={selectedInitiative.progress} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget Utilization</Label>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>${(selectedInitiative.spent / 1000).toLocaleString()}k / ${(selectedInitiative.budget / 1000).toLocaleString()}k</span>
                          <span>{Math.round((selectedInitiative.spent / selectedInitiative.budget) * 100)}%</span>
                        </div>
                        <Progress value={(selectedInitiative.spent / selectedInitiative.budget) * 100} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Label>Start Date</Label>
                      <div className="font-medium">{selectedInitiative.startDate}</div>
                    </div>
                    <div>
                      <Label>Target Date</Label>
                      <div className="font-medium">{selectedInitiative.targetDate}</div>
                    </div>
                    <div>
                      <Label>Location</Label>
                      <div className="font-medium">{selectedInitiative.location}</div>
                    </div>
                    <div>
                      <Label>Responsible Team</Label>
                      <div className="font-medium">{selectedInitiative.responsibleTeam}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-esg-environmental/10 border border-esg-environmental/20">
                      <Label>Estimated Impact</Label>
                      <div className="text-xl font-bold text-esg-environmental">{selectedInitiative.estimatedImpact}</div>
                      <div className="text-sm text-muted-foreground">{selectedInitiative.impactMetric}</div>
                    </div>
                    {selectedInitiative.actualImpact && (
                      <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                        <Label>Actual Impact</Label>
                        <div className="text-xl font-bold text-success">{selectedInitiative.actualImpact}</div>
                        <div className="text-sm text-muted-foreground">{selectedInitiative.impactMetric}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Milestones */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Project Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedInitiative.milestones.map((milestone, index) => (
                      <div key={milestone.id} className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full mt-1 ${getMilestoneColor(milestone.status)} ${milestone.status === 'completed' ? 'bg-current' : 'border-2 border-current'}`} />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{milestone.title}</h4>
                            <Badge variant="outline" className={getMilestoneColor(milestone.status)}>
                              {milestone.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          <div className="text-xs text-muted-foreground">Target: {milestone.targetDate}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="text-center py-12">
                <Target className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-medium mb-2">Select an Initiative</h3>
                <p className="text-muted-foreground">Choose an initiative from the overview to view detailed information and milestones.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};