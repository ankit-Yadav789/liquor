"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

export function AdminThemeContent() {
  const handleSave = () => {
    // Save theme colors
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold">Theme Management</h1>
        <p className="text-muted-foreground">Customize website colors and branding</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Color System
          </CardTitle>
          <CardDescription>
            Update these colors to change the entire website theme. Changes apply to both light and dark modes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="primary">Primary Color (Wine Red)</Label>
              <div className="flex gap-2">
                <Input id="primary" type="color" defaultValue="#8B2635" className="h-10 w-20" />
                <Input defaultValue="#8B2635" className="flex-1 font-mono" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondary">Secondary Color (Gold)</Label>
              <div className="flex gap-2">
                <Input id="secondary" type="color" defaultValue="#D4AF37" className="h-10 w-20" />
                <Input defaultValue="#D4AF37" className="flex-1 font-mono" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accent">Accent Color (Burgundy)</Label>
              <div className="flex gap-2">
                <Input id="accent" type="color" defaultValue="#6B1F29" className="h-10 w-20" />
                <Input defaultValue="#6B1F29" className="flex-1 font-mono" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="background">Background Color</Label>
              <div className="flex gap-2">
                <Input id="background" type="color" defaultValue="#FFFFFF" className="h-10 w-20" />
                <Input defaultValue="#FFFFFF" className="flex-1 font-mono" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Reset to Default</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>See how your theme looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 rounded-lg border p-6">
            <div className="flex items-center gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="rounded-lg bg-primary p-4 text-primary-foreground">
              <h3 className="font-serif text-xl font-bold">Premium Wine Collection</h3>
              <p className="text-sm">Experience the finest selection of wines from around the world</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
