import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Palmtree, Landmark, Utensils, Sun, Waves, Mountain, Banknote, CreditCard, Info, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { IEEEFooter } from '@/components/ieee-footer'
import { IEEEMetaNav } from '@/components/ieee-meta-nav'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Discover Tunisia | ICRA 2026 Satellite School',
  description: 'Explore Tunisia - a beautiful North African country with rich history, stunning landscapes, and vibrant culture. Your guide to visiting Tunisia for ICRA 2026.',
}

export default function TunisiaPage() {
  return (
    <>
      <IEEEMetaNav />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-[100px] md:pt-[120px]">
        {/* Hero Section - Refined */}
        <section className="relative py-12 md:py-16 lg:py-20 px-4 border-b border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]" />
          
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Destination Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-primary to-cyan-500 bg-clip-text text-transparent leading-[1.1]">
              Discover Tunisia
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-3 md:mb-4">
              تونس - Your Gateway to North Africa
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience 1,250km of stunning coastline, ancient civilizations, diverse landscapes, 
              and a rich tapestry of Mediterranean, Arab, and Berber cultures.
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20 space-y-16 md:space-y-24">
          {/* Highlights Grid - Premium Design */}
          <section className="space-y-8 md:space-y-12">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Why Visit Tunisia?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes Tunisia an unforgettable destination
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={highlight.title}
                  className="group border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="space-y-4 p-6 relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transition-transform">
                        {highlight.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 relative z-10">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Currency Section - Elegant Design */}
          <section>
            <Card className="border-primary/30 shadow-2xl shadow-primary/10 bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
              
              <CardHeader className="space-y-3 p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                    <Banknote className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold">Currency Information</CardTitle>
                    <CardDescription className="text-sm md:text-base mt-1">
                      Tunisian Dinar (TND) - Easy to exchange
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 md:p-8 pt-0 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Exchange Rate */}
                  <div className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Exchange Rate</span>
                      <Badge variant="outline" className="text-xs">Approximate</Badge>
                    </div>
                    <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20">
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold">1</div>
                        <div className="text-xs text-muted-foreground mt-1">USD</div>
                      </div>
                      <div className="text-2xl text-muted-foreground">≈</div>
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
                        <div className="text-xs text-muted-foreground mt-1">TND</div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Always check current rates before your trip
                    </p>
                  </div>

                  {/* Money Tips */}
                  <div className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-base md:text-lg">Money Tips</h4>
                    </div>
                    <ul className="space-y-3">
                      {moneyTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3 group">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Must-Visit Places - Stunning Gallery */}
          <section className="space-y-8 md:space-y-12">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Must-Visit Places
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore Tunisia's most iconic and breathtaking destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {mustVisitPlaces.map((place, index) => (
                <Card 
                  key={place.name}
                  className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-transparent"
                >
                  <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <Badge className="bg-white/95 text-gray-900 border-0 w-fit mb-3 text-xs font-semibold px-3 py-1">
                        {place.type}
                      </Badge>
                      <h3 className="text-white font-bold text-2xl md:text-3xl mb-3 drop-shadow-2xl group-hover:translate-y-[-4px] transition-transform duration-300">
                        {place.name}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow-lg line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Practical Information - Clean Grid */}
          <section>
            <Card className="border-blue-500/30 shadow-2xl shadow-blue-500/10 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
              
              <CardHeader className="space-y-3 p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 backdrop-blur-sm">
                    <Info className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">Practical Information</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Essential details to help you prepare for your visit
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 md:p-8 pt-0 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {practicalInfo.map((info, index) => (
                    <div 
                      key={info.title}
                      className="group p-5 md:p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                        <h4 className="font-bold text-base md:text-lg">{info.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      
      <Footer />
      <IEEEFooter />
    </>
  )
}

// Data
const highlights = [
  {
    title: 'Rich History',
    description: 'Explore ancient Roman ruins, medieval medinas, and UNESCO World Heritage sites that span millennia of human civilization.',
    icon: <Landmark className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
  {
    title: 'Stunning Coastline',
    description: 'Discover 1,250km of pristine Mediterranean beaches, hidden coves, and picturesque islands perfect for relaxation.',
    icon: <Waves className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
  {
    title: 'Diverse Landscapes',
    description: 'From golden Sahara dunes to lush mountain ranges, experience an incredible variety of natural wonders.',
    icon: <Mountain className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
  {
    title: 'Vibrant Culture',
    description: 'Immerse yourself in a unique blend of Arab, Berber, and Mediterranean traditions, music, and festivals.',
    icon: <Palmtree className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
  {
    title: 'Delicious Cuisine',
    description: 'Savor authentic dishes featuring Mediterranean flavors, aromatic spices, and the freshest local ingredients.',
    icon: <Utensils className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
  {
    title: 'Warm Climate',
    description: 'Enjoy pleasant Mediterranean weather with warm summers and mild winters, ideal for year-round visits.',
    icon: <Sun className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
  },
]

const moneyTips = [
  'ATMs widely available in cities and tourist areas',
  'Credit cards accepted in major establishments',
  'Exchange at banks or official exchange offices',
  'Keep cash for markets and small purchases',
]

const mustVisitPlaces = [
  {
    name: 'Medina of Tunis',
    type: 'UNESCO Site',
    description: 'A historic walled city with narrow streets, traditional souks, and stunning Islamic architecture. One of the best-preserved medieval cities in the Arab world.',
    image: '/tunisia/Medina of Tunis.jpg',
  },
  {
    name: 'Sidi Bou Said',
    type: 'Village',
    description: 'A picturesque clifftop village famous for its blue and white architecture, stunning Mediterranean views, and artistic heritage.',
    image: '/tunisia/sidi bou.webp',
  },
  {
    name: 'Carthage',
    type: 'Archaeological Site',
    description: 'Ancient Phoenician and Roman ruins overlooking the Mediterranean. Explore the remains of one of the greatest civilizations of antiquity.',
    image: '/tunisia/carthage.webp',
  },
  {
    name: 'Sahara Desert',
    type: 'Natural Wonder',
    description: 'Experience the magic of the Sahara with its golden dunes, oasis towns, and unique desert landscapes. Perfect for adventure seekers.',
    image: '/tunisia/sahara Desert.webp',
  },
  {
    name: 'Djerba Island',
    type: 'Beach Destination',
    description: 'A beautiful island known for its sandy beaches, traditional architecture, and relaxed Mediterranean atmosphere.',
    image: '/tunisia/Djerba.jpg',
  },
  {
    name: 'El Djem Amphitheatre',
    type: 'UNESCO Site',
    description: 'One of the best-preserved Roman amphitheatres in the world, rivaling the Colosseum in Rome for its impressive architecture.',
    image: '/tunisia/El Djem Amphitheatre.jpg',
  },
]

const practicalInfo = [
  {
    title: 'Language',
    icon: '🗣️',
    description: 'Arabic is official. French widely spoken, English increasingly common in tourist areas.',
  },
  {
    title: 'Climate',
    icon: '🌡️',
    description: 'Mediterranean climate. June is warm and pleasant, perfect for the conference.',
  },
  {
    title: 'Transportation',
    icon: '🚕',
    description: 'Taxis and public transport.',
  },
  {
    title: 'Safety',
    icon: '🛡️',
    description: 'Generally safe for tourists. Exercise normal precautions as you would anywhere.',
  },
  {
    title: 'Time Zone',
    icon: '⏰',
    description: 'Central European Time (CET), UTC+1. No daylight saving time observed.',
  },
  {
    title: 'Electricity',
    icon: '🔌',
    description: 'Type C and E plugs (European), 230V, 50Hz. Bring appropriate adapters.',
  },
]
