import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Github, Globe, HelpCircle, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-background">
      <header className="px-4 pt-14 pb-4 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">About VisaCheck</h1>
      </header>

      <main className="flex-1 px-4 pb-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>About This App</CardTitle>
            <CardDescription>
              VisaCheck helps travelers check visa requirements based on their nationality.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              VisaCheck is a Progressive Web App (PWA) that allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
              <li>Check visa requirements for any nationality to any destination</li>
              <li>View detailed information about visa types and requirements</li>
              <li>Save recent searches for quick reference</li>
              <li>Access information offline once loaded</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              This app is designed to be used as a quick reference and should be installed on your home screen for the best experience.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The visa requirement data in this application is sourced from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Henley Passport Index</li>
              <li>Official embassy and consulate websites</li>
              <li>International travel information databases</li>
            </ul>
            <div className="mt-4 p-3 bg-primary/10 rounded-md text-xs">
              <p className="font-medium flex items-center">
                <HelpCircle className="h-4 w-4 mr-1 text-primary" />
                Important Disclaimer
              </p>
              <p className="mt-1 text-muted-foreground">
                While we strive to maintain accurate information, visa requirements can change frequently. Always verify with the official embassy or consulate of your destination country before travel.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Install as PWA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              For the best experience, install VisaCheck on your home screen:
            </p>
            
            <h3 className="font-medium text-sm mb-2">On iPhone:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground mb-4">
              <li>Open this app in Safari</li>
              <li>Tap the share button</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" in the upper right corner</li>
            </ol>

            <h3 className="font-medium text-sm mb-2">On Android:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Open this app in Chrome</li>
              <li>Tap the menu button (three dots)</li>
              <li>Tap "Add to Home screen"</li>
              <li>Tap "Add" to confirm</li>
            </ol>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground mt-8">
          <p>VisaCheck App v1.0.0</p>
          <p className="mt-1">© 2023 - {new Date().getFullYear()}</p>
        </div>
      </main>
    </div>
  );
}
