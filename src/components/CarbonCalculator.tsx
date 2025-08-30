import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  Factory, 
  Zap, 
  Truck, 
  Plane, 
  Home, 
  Plus,
  Download,
  Upload
} from "lucide-react";

interface EmissionEntry {
  id: string;
  scope: 1 | 2 | 3;
  category: string;
  source: string;
  amount: number;
  unit: string;
  emissionFactor: number;
  totalEmissions: number;
  date: string;
}

export const CarbonCalculator = () => {
  const [entries, setEntries] = useState<EmissionEntry[]>([
    {
      id: '1',
      scope: 1,
      category: 'Stationary Combustion',
      source: 'Natural Gas - Facility A',
      amount: 50000,
      unit: 'kWh',
      emissionFactor: 0.185,
      totalEmissions: 9250,
      date: '2024-01-15'
    },
    {
      id: '2',
      scope: 2,
      category: 'Purchased Electricity',
      source: 'Grid Electricity - HQ',
      amount: 120000,
      unit: 'kWh',
      emissionFactor: 0.233,
      totalEmissions: 27960,
      date: '2024-01-15'
    },
    {
      id: '3',
      scope: 3,
      category: 'Business Travel',
      source: 'Air Travel - International',
      amount: 50,
      unit: 'flights',
      emissionFactor: 2100,
      totalEmissions: 105000,
      date: '2024-01-10'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    scope: 1 as 1 | 2 | 3,
    category: '',
    source: '',
    amount: '',
    unit: '',
    emissionFactor: ''
  });

  const scopeCategories = {
    1: ['Stationary Combustion', 'Mobile Combustion', 'Process Emissions', 'Fugitive Emissions'],
    2: ['Purchased Electricity', 'Purchased Steam', 'Purchased Heating/Cooling'],
    3: ['Business Travel', 'Employee Commuting', 'Waste', 'Water', 'Purchased Goods', 'Transportation']
  };

  const emissionFactors: Record<string, Record<string, number>> = {
    'Natural Gas': { 'kWh': 0.185, 'cubic_meters': 1.9 },
    'Electricity': { 'kWh': 0.233 },
    'Diesel': { 'liters': 2.68 },
    'Gasoline': { 'liters': 2.31 },
    'Air Travel': { 'flights': 2100, 'km': 0.115 },
    'Water': { 'cubic_meters': 0.344 }
  };

  const addEntry = () => {
    if (!newEntry.source || !newEntry.amount || !newEntry.emissionFactor) return;

    const totalEmissions = parseFloat(newEntry.amount) * parseFloat(newEntry.emissionFactor);
    const entry: EmissionEntry = {
      id: Date.now().toString(),
      scope: newEntry.scope,
      category: newEntry.category,
      source: newEntry.source,
      amount: parseFloat(newEntry.amount),
      unit: newEntry.unit,
      emissionFactor: parseFloat(newEntry.emissionFactor),
      totalEmissions,
      date: new Date().toISOString().split('T')[0]
    };

    setEntries([...entries, entry]);
    setNewEntry({
      scope: 1,
      category: '',
      source: '',
      amount: '',
      unit: '',
      emissionFactor: ''
    });
  };

  const getTotalByScope = (scope: 1 | 2 | 3) => {
    return entries
      .filter(entry => entry.scope === scope)
      .reduce((sum, entry) => sum + entry.totalEmissions, 0);
  };

  const totalEmissions = entries.reduce((sum, entry) => sum + entry.totalEmissions, 0);
  const scope1Total = getTotalByScope(1);
  const scope2Total = getTotalByScope(2);
  const scope3Total = getTotalByScope(3);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calculator className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Carbon Calculator</h1>
            <p className="text-muted-foreground">Track and calculate your organization's carbon footprint</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emissions-high">{totalEmissions.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">tCO2e (2024)</div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Factory className="w-4 h-4 mr-2 text-emissions-high" />
              Scope 1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emissions-high">{scope1Total.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Direct emissions</div>
            <Progress value={(scope1Total / totalEmissions) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Zap className="w-4 h-4 mr-2 text-emissions-medium" />
              Scope 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emissions-medium">{scope2Total.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Electricity, heating</div>
            <Progress value={(scope2Total / totalEmissions) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Truck className="w-4 h-4 mr-2 text-emissions-high" />
              Scope 3
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emissions-high">{scope3Total.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Value chain</div>
            <Progress value={(scope3Total / totalEmissions) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add New Entry */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2 text-primary" />
              Add Emission Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Scope</Label>
                <Select value={newEntry.scope.toString()} onValueChange={(value) => setNewEntry({...newEntry, scope: parseInt(value) as 1 | 2 | 3})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Scope 1</SelectItem>
                    <SelectItem value="2">Scope 2</SelectItem>
                    <SelectItem value="3">Scope 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label>Category</Label>
                <Select value={newEntry.category} onValueChange={(value) => setNewEntry({...newEntry, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {scopeCategories[newEntry.scope].map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Source Description</Label>
              <Input
                placeholder="e.g., Natural Gas - Building A"
                value={newEntry.source}
                onChange={(e) => setNewEntry({...newEntry, source: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Amount</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={newEntry.amount}
                  onChange={(e) => setNewEntry({...newEntry, amount: e.target.value})}
                />
              </div>
              <div>
                <Label>Unit</Label>
                <Select value={newEntry.unit} onValueChange={(value) => setNewEntry({...newEntry, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kWh">kWh</SelectItem>
                    <SelectItem value="liters">Liters</SelectItem>
                    <SelectItem value="cubic_meters">Cubic Meters</SelectItem>
                    <SelectItem value="flights">Flights</SelectItem>
                    <SelectItem value="km">Kilometers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Emission Factor (kgCO2e/unit)</Label>
              <Input
                type="number"
                step="0.001"
                placeholder="0.000"
                value={newEntry.emissionFactor}
                onChange={(e) => setNewEntry({...newEntry, emissionFactor: e.target.value})}
              />
            </div>

            <Button onClick={addEntry} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Entry
            </Button>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {entries.slice(-5).reverse().map((entry) => (
                <div key={entry.id} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={entry.scope === 1 ? "destructive" : entry.scope === 2 ? "default" : "secondary"}>
                      Scope {entry.scope}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{entry.date}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{entry.source}</div>
                    <div className="text-xs text-muted-foreground">{entry.category}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {entry.amount.toLocaleString()} {entry.unit}
                      </span>
                      <span className="font-medium text-sm">{entry.totalEmissions.toLocaleString()} tCO2e</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Entries Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>All Emission Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Scope</th>
                  <th className="text-left p-2">Category</th>
                  <th className="text-left p-2">Source</th>
                  <th className="text-right p-2">Amount</th>
                  <th className="text-right p-2">Unit</th>
                  <th className="text-right p-2">Factor</th>
                  <th className="text-right p-2">Total Emissions</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} className="border-b hover:bg-muted/50">
                    <td className="p-2">{entry.date}</td>
                    <td className="p-2">
                      <Badge variant={entry.scope === 1 ? "destructive" : entry.scope === 2 ? "default" : "secondary"} className="text-xs">
                        {entry.scope}
                      </Badge>
                    </td>
                    <td className="p-2">{entry.category}</td>
                    <td className="p-2">{entry.source}</td>
                    <td className="p-2 text-right">{entry.amount.toLocaleString()}</td>
                    <td className="p-2 text-right">{entry.unit}</td>
                    <td className="p-2 text-right">{entry.emissionFactor}</td>
                    <td className="p-2 text-right font-medium">{entry.totalEmissions.toLocaleString()} tCO2e</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};