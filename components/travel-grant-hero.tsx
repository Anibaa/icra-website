"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, DollarSign, Calendar, Users, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react"
import Globe from "@/components/ui/globe"

export function TravelGrantHero() {
  return (
    <section id="travel-grant" className="relative py-8 md:py-12 px-4 overflow-hidden border-y border-border/50">
      {/* Globe Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">
          <Globe />
        </div>
      </div>
      
      {/* Animated Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.08),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 mb-3 backdrop-blur-sm">
            <Plane className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Travel Grant Opportunity</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-primary to-cyan-500 bg-clip-text text-transparent">
            Funding Available for Participants
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Apply for financial support to attend ICRA Satellite School 2026
          </p>
        </motion.div>

        {/* Grant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* National Grant */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-primary/30 shadow-lg shadow-primary/10 bg-gradient-to-br from-primary/5 to-background hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-primary-foreground">National</Badge>
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Tunisian Participants</CardTitle>
                <CardDescription className="text-sm">
                  Full registration fee coverage for local attendees
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-primary/10">
                  <DollarSign className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-base">Up to Full Registration</div>
                    <div className="text-xs text-muted-foreground">Complete fee coverage</div>
                  </div>
                </div>
                
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>Active IEEE RAS membership required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>Full registration fee reimbursement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* International Grant */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-background hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-cyan-500 text-white">International</Badge>
                  <Plane className="w-5 h-5 text-cyan-500" />
                </div>
                <CardTitle className="text-xl">International Participants</CardTitle>
                <CardDescription className="text-sm">
                  Financial support for global attendees
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-cyan-500/10">
                  <DollarSign className="w-5 h-5 text-cyan-500 shrink-0" />
                  <div>
                    <div className="font-bold text-base">Up to $500 USD</div>
                    <div className="text-xs text-muted-foreground">Partial funding support</div>
                  </div>
                </div>
                
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Active IEEE RAS membership required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Reimbursement after event completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <Card className="border-destructive/30 bg-gradient-to-r from-destructive/10 to-destructive/5">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-destructive/20">
                  <Calendar className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1.5 flex items-center gap-2">
                    Application Deadline
                  </h3>
                  <p className="text-sm">
                    <strong className="text-destructive">April 26th, 2026 - 23:59 (GMT+1)</strong>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Submit your application before the deadline to be considered for funding
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-base">Important Notes</h3>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Funding exclusively available to active IEEE RAS members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Selection based on eligibility, motivation, and IEEE involvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 font-bold">★</span>
                      <span><strong>Priority</strong> will be granted to applicants who can demonstrate a passion for robotics and automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* If Rejected Section */}
          <Card className="border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
            <CardContent className="p-3 md:p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/20">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-amber-900 dark:text-amber-100">
                    If Your Application is Not Selected
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <div className="p-2.5 rounded-lg bg-background/50 border border-border/50">
                    <h4 className="font-semibold text-xs mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      Still Want to Participate?
                    </h4>
                    <p className="text-[0.7rem] text-muted-foreground leading-relaxed">
                      Register normally and complete your payment. Attend the School and have fun!
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-background/50 border border-border/50">
                    <h4 className="font-semibold text-xs mb-1 flex items-center gap-1.5">
                      <span className="text-muted-foreground text-xs">✓</span>
                      Unable to Join?
                    </h4>
                    <p className="text-[0.7rem] text-muted-foreground leading-relaxed">
                      No action needed. We hope to see you at other events!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <div className="text-center pt-2">
            <motion.a
              href="https://forms.gle/eXjfkYBPbio2EfbD6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-semibold border border-pink-400/50 brand-red-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Apply for Travel Grant</span>
              <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.a>
            <p className="text-xs text-muted-foreground mt-3">
              Questions? Contact us at{" "}
              <a href="mailto:icra-tep@ieee.tn" className="text-primary hover:underline">
                icra-tep@ieee.tn
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
