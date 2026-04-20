import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2, AlertTriangle, ExternalLink, FileText, Plane, Building2, Globe, Clock, MapPin } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { IEEEFooter } from '@/components/ieee-footer'
import { IEEEMetaNav } from '@/components/ieee-meta-nav'
import Image from 'next/image'
import { getCountryCode, getFlagUrl } from '@/lib/country-codes'
import { VisaGlobe } from '@/components/visa-globe'

export const metadata: Metadata = {
  title: 'Visa Requirements | IEEE Conference',
  description: 'Find out if you need a visa to visit Tunisia, check eligibility for visa-free travel, and learn about the application process.',
}

export default function VisaPage() {
  return (
    <>
      <IEEEMetaNav />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-[120px] md:pt-[140px]">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-24 px-4 border-b border-border/50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6 backdrop-blur-sm">
            <Plane className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-primary">Travel Information</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-primary to-cyan-500 bg-clip-text text-transparent leading-tight px-2">
            Visa Requirements
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-3 md:mb-4 px-2">
            For Travelers to Tunisia
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Find out if you need a visa to visit Tunisia, check eligibility for visa-free travel, 
            and learn about the application process for different nationalities.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 max-w-3xl mx-auto px-2">
            <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 backdrop-blur-sm">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-foreground">90+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Visa-Free Countries</div>
            </div>
            <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-cyan-500 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-foreground">90 Days</div>
              <div className="text-xs md:text-sm text-muted-foreground">Typical Stay Duration</div>
            </div>
            <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 backdrop-blur-sm">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-foreground">Tunisia</div>
              <div className="text-xs md:text-sm text-muted-foreground">North Africa</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-3 md:px-4 py-8 md:py-12 lg:py-16 space-y-8 md:space-y-12">
        {/* Important Alert */}
        <Alert className="border-destructive/50 bg-gradient-to-r from-destructive/10 to-destructive/5 shadow-lg shadow-destructive/5">
          <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-destructive flex-shrink-0" />
          <AlertDescription className="text-sm md:text-base text-foreground">
            <strong className="text-destructive">Important Note:</strong> Always check with the Tunisian embassy or consulate in your country 
            for the most up-to-date visa information before planning your trip.
          </AlertDescription>
        </Alert>

        {/* Visa Policy Overview */}
        <Card className="border-border/50 shadow-xl shadow-purple-500/5 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl">Visa Policy for Tunisia</CardTitle>
            </div>
            <CardDescription className="text-sm md:text-base lg:text-lg">
              Tunisia's visa policy varies depending on your nationality. Some travelers can enter visa-free, 
              while others require a visa in advance.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-4 order-2 lg:order-1">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    Citizens from many countries can stay in Tunisia without a visa for up to 90 days, 
                    while others may need to apply for a visa at a Tunisian embassy or consulate before arrival.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-base md:text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Key Information
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>90+ countries</strong> enjoy visa-free access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Up to 90 days</strong> typical stay duration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Special durations</strong> for select countries (up to 4 months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Visa on arrival</strong> available for some nationalities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Interactive Globe */}
              <div className="order-1 lg:order-2">
                <VisaGlobe />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visa-Free Entry */}
        <Card className="border-primary/30 shadow-xl shadow-primary/10 bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Visa-Free Entry
              </CardTitle>
            </div>
            <CardDescription className="text-sm md:text-base lg:text-lg">
              Citizens of the following countries do not need a visa for short stays (typically 90 days or less)
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {visaFreeCountries.map((country, index) => {
                const countryCode = getCountryCode(country)
                return (
                  <div 
                    key={country} 
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 20}ms` }}
                  >
                    {countryCode && (
                      <div className="relative w-5 h-3 md:w-6 md:h-4 flex-shrink-0 rounded overflow-hidden shadow-sm">
                        <Image
                          src={getFlagUrl(countryCode)}
                          alt={`${country} flag`}
                          width={24}
                          height={16}
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    {!countryCode && (
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="text-xs md:text-sm font-medium leading-tight">{country}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Special Duration Cases */}
        <Card className="border-destructive/40 shadow-xl shadow-destructive/10 bg-gradient-to-br from-destructive/10 via-destructive/5 to-primary/5 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--destructive)/0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
          
          <CardHeader className="space-y-2 md:space-y-3 relative z-10 p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 md:p-2.5 rounded-xl bg-gradient-to-br from-destructive/20 to-primary/20 shadow-lg">
                <Clock className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-destructive" />
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-destructive via-primary to-cyan-500 bg-clip-text text-transparent">
                  Special Duration Cases
                </CardTitle>
                <CardDescription className="text-xs md:text-sm lg:text-base mt-1">
                  Extended stay periods for select countries
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {specialDurations.map((item, index) => {
                const countryCode = getCountryCode(item.country)
                return (
                  <div 
                    key={item.country} 
                    className="group relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border-2 border-destructive/30 hover:border-destructive/60 hover:shadow-lg hover:shadow-destructive/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Highlight corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-destructive/20 to-transparent rounded-bl-3xl" />
                    
                    <div className="relative space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        {countryCode && (
                          <div className="relative w-8 h-5 md:w-10 md:h-7 flex-shrink-0 rounded-md overflow-hidden shadow-md ring-2 ring-destructive/30">
                            <Image
                              src={getFlagUrl(countryCode)}
                              alt={`${item.country} flag`}
                              width={40}
                              height={28}
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        )}
                        <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-destructive transition-colors">
                          {item.country}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-2 pl-1">
                        <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-destructive to-primary rounded-full" />
                        <p className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <Alert className="mt-4 md:mt-6 border-destructive/40 bg-gradient-to-r from-destructive/10 to-primary/10 backdrop-blur-sm">
              <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-destructive flex-shrink-0" />
              <AlertDescription className="text-xs md:text-sm font-medium">
                <strong>Note:</strong> Always verify current requirements with the Tunisian embassy or consulate in your country.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How to Apply */}
        <div className="space-y-6 md:space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              How to Apply for a Tunisian Visa
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Choose the application method that best suits your nationality and travel plans
            </p>
          </div>
          
          {/* Options Grid - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Option 1: Visa on Arrival */}
            <Card className="border-primary/30 shadow-xl shadow-primary/5 bg-gradient-to-br from-primary/5 to-cyan-500/5">
              <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                    <Plane className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl">Option 1: Visa on Arrival</CardTitle>
                    <CardDescription className="text-xs md:text-sm mt-1 md:mt-2">
                      Some nationalities can obtain a visa upon arrival at Tunis-Carthage Airport or other entry points.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="p-3 md:p-4 rounded-lg bg-background/50 border border-border/50">
                  <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Eligible Countries Include:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {visaOnArrivalCountries.map((country) => {
                      const countryCode = getCountryCode(country)
                      return (
                        <Badge key={country} variant="outline" className="bg-primary/10 border-primary/30 text-primary flex items-center gap-1 text-xs md:text-sm">
                          {countryCode && (
                            <div className="relative w-3 h-2 md:w-4 md:h-3 flex-shrink-0 rounded overflow-hidden">
                              <Image
                                src={getFlagUrl(countryCode)}
                                alt={`${country} flag`}
                                width={16}
                                height={12}
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          )}
                          {country}
                        </Badge>
                      )
                    })}
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs md:text-sm">
                      And others…
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Required Documents
                  </h4>
                  <div className="grid gap-2 md:gap-3">
                    {requiredDocuments.map((doc, index) => (
                      <div 
                        key={doc.title} 
                        className="flex gap-2 md:gap-3 p-2 md:p-3 rounded-lg border border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="p-1 md:p-1.5 rounded-lg bg-primary/10 h-fit">
                          <FileText className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-xs md:text-sm mb-0.5 md:mb-1">{doc.title}</div>
                          <div className="text-[10px] md:text-xs text-muted-foreground leading-tight">{doc.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Option 2: Embassy Application */}
            <Card className="border-cyan-500/30 shadow-xl shadow-cyan-500/5 bg-gradient-to-br from-cyan-500/5 to-primary/5">
              <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 rounded-lg bg-cyan-500/10">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl">Option 2: Embassy Application</CardTitle>
                    <CardDescription className="text-xs md:text-sm mt-1 md:mt-2">
                      If your country is not eligible for visa-free or visa-on-arrival entry, apply in advance.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <h4 className="font-semibold text-sm md:text-base flex items-center gap-2">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" />
                    Application Process
                  </h4>
                  {applicationSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="flex gap-2 md:gap-3 p-2 md:p-3 rounded-lg border border-border/50 bg-background/50 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-500 to-primary text-white flex items-center justify-center font-bold text-xs md:text-sm shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-xs md:text-sm mb-0.5 md:mb-1">{step.title}</h5>
                        <p className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 leading-tight">{step.description}</p>
                        {step.items && (
                          <ul className="space-y-0.5 md:space-y-1 ml-1 md:ml-2">
                            {step.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-1 md:gap-2 text-[10px] md:text-xs">
                                <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyan-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Find Embassy */}
          <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl shadow-primary/10">
            <CardHeader className="space-y-2 md:space-y-3 text-center p-4 md:p-6">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary/20">
                  <Building2 className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl lg:text-3xl">Find Tunisian Diplomatic Missions</CardTitle>
                  <CardDescription className="text-sm md:text-base lg:text-lg mt-1 md:mt-2 px-2">
                    Locate your nearest Tunisian embassy or consulate to begin your visa application process.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center p-4 md:p-6">
              <a
                href="https://www.diplomatie.gov.tn/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold text-base md:text-lg group"
              >
                <span className="text-sm md:text-base lg:text-lg">Find Tunisian Embassies & Consulates</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="border-destructive/50 bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-xl shadow-destructive/5">
          <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 rounded-lg bg-destructive/20">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl">Important Notes</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
            {importantNotes.map((note, index) => (
              <div 
                key={index} 
                className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-background/50 border border-border/50 hover:border-destructive/50 hover:bg-destructive/5 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-destructive to-primary text-white flex items-center justify-center font-bold text-xs md:text-sm shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-sm md:text-base mb-1 md:mb-2">{note.title}</h5>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{note.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Conference Note */}
        <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl shadow-primary/10">
          <CardHeader className="space-y-2 md:space-y-3 p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 rounded-lg bg-primary/20">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <CardTitle className="text-lg md:text-xl lg:text-2xl">Conference Invitation Letter</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
            <Alert className="border-destructive/50 bg-gradient-to-r from-destructive/10 to-primary/10">
              <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-destructive flex-shrink-0" />
              <AlertDescription className="text-sm md:text-base leading-relaxed">
                <strong className="text-destructive">Important:</strong> The conference organizers cannot assist with individual visa applications 
                or intervene with embassies/consulates on behalf of participants.
              </AlertDescription>
            </Alert>
            
            <div className="p-3 md:p-4 rounded-lg bg-background/50 border border-border/50">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 h-fit">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Invitation Letter Available</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Upon the payment of your registration fees, an official invitation letter will be made available 
                    to support your visa application. This letter can be presented to the embassy or consulate as 
                    proof of your participation in the conference.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      
      <Footer />
      <IEEEFooter />
    </>
  )
}

// Data
const visaFreeCountries = [
  'All European Union citizens (except Cyprus)',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Australia',
  'Bahrain',
  'Barbados',
  'Benin',
  'Bosnia and Herzegovina',
  'Brazil',
  'Brunei',
  'Burkina Faso',
  'Canada',
  'Cape Verde',
  'Chile',
  'Comoros',
  'Costa Rica',
  'Cote d\'Ivoire',
  'Equatorial Guinea',
  'Fiji',
  'Gabon',
  'Gambia',
  'Guinea',
  'Guinea Bissau',
  'Hong Kong',
  'Honduras',
  'Iceland',
  'Japan',
  'Jordan',
  'Kiribati',
  'South Korea',
  'Kuwait',
  'Libya',
  'Liechtenstein',
  'Malaysia',
  'Maldives',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Montenegro',
  'Morocco',
  'Namibia',
  'New Zealand',
  'Niger',
  'North Macedonia',
  'Norway',
  'Oman',
  'Qatar',
  'Russia',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'San Marino',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Singapore',
  'South Africa',
  'Switzerland',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Vatican City',
]

const specialDurations = [
  { country: 'Canada', duration: 'Can stay up to 4 months without a visa' },
  { country: 'Germany', duration: 'Can stay up to 4 months without a visa' },
  { country: 'Bulgaria', duration: 'Can stay up to 2 months without a visa' },
  { country: 'Greece', duration: 'Can stay up to 1 month without a visa' },
  { country: 'United States', duration: 'Can stay up to 4 months without a visa' },
]

const visaOnArrivalCountries = ['Malaysia', 'Thailand', 'Indonesia', 'Singapore']

const requiredDocuments = [
  {
    title: 'Valid Passport',
    description: 'Valid for at least 6 months beyond your stay',
  },
  {
    title: 'Hotel Booking',
    description: 'Proof of accommodation for your entire stay',
  },
  {
    title: 'Return Ticket',
    description: 'Confirmed flight reservation showing departure',
  },
  {
    title: 'Sufficient Funds',
    description: 'Cash or bank statements showing financial capability',
  },
]

const applicationSteps = [
  {
    title: 'Find Embassy',
    description: 'Locate your nearest Tunisian diplomatic mission',
  },
  {
    title: 'Prepare Documents',
    description: 'Gather all required application materials',
    items: [
      'Completed visa application form',
      'Recent passport-sized photos',
      'Flight itinerary & hotel booking',
      'Invitation letter from conference organizers',
      'Bank statements (proof of funds)',
    ],
  },
  {
    title: 'Submit Application',
    description: 'Apply in person or by mail depending on embassy requirements',
  },
  {
    title: 'Pay Fee',
    description: 'Visa fees vary by nationality and visa type',
  },
]

const importantNotes = [
  {
    title: 'Verify Requirements Early',
    description:
      'All conference participants are kindly requested to verify and fulfill all of their own VISA requirements in advance of the conference.',
  },
  {
    title: 'Regulations Vary by Nationality',
    description:
      'The Visa regulations can vary significantly by nationality, and processing times may be longer than expected due to enhanced security measures worldwide.',
  },
  {
    title: 'Begin Process Early',
    description:
      'It\'s strongly recommended beginning the visa process as early as possible to avoid last-minute complications.',
  },
]
