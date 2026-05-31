'use client'
import { useAppContext } from '@/hooks/useAppContext'
import './about.scss'
import BlockInfo from '@/components/Blocks/Info/BlockInfo'
import InfoText from '@/components/Blocks/InfoText/InfoText'

const SectionAbout = () => {
  const { lang } = useAppContext()

  return (
    <section className='section_about section_text'>
       <div className="section__content">
          <div className="container_page container_content">
             <section id="features"
                className="py-20 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                   <div className="text-center mb-16">
                      <h2 className="text-3xl font-serif font-bold mb-4">Comprehensive Risk Management</h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto" style={{color: "gray"}}>Our platform provides everything you need to assess, track, and manage insurance risks.</p>
                   </div>
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-list h-6 w-6 text-primary">
                                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                  <path d="M12 11h4"></path>
                                  <path d="M12 16h4"></path>
                                  <path d="M8 11h.01"></path>
                                  <path d="M8 16h.01"></path>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Risk Assessments</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Complete 20-question assessments across Safety, Workers' Comp, and Fleet pillars with precise scoring.</p>
                         </div>
                      </div>
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column h-6 w-6 text-primary">
                                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                  <path d="M18 17V9"></path>
                                  <path d="M13 17V5"></path>
                                  <path d="M8 17v-3"></path>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Score Analytics</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Real-time scoring with pillar breakdowns and overall risk ratings from High Risk to Strong/Low Risk.</p>
                         </div>
                      </div>
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-6 w-6 text-primary">
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Action Management</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Create, assign, and track action items with priority rankings based on risk severity.</p>
                         </div>
                      </div>
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-6 w-6 text-primary">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Subcontractor Scoring</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Evaluate subcontractor risk with dedicated controls for safety training and insurance verification.</p>
                         </div>
                      </div>
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-check h-6 w-6 text-primary">
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                  <path d="m9 15 2 2 4-4"></path>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Document Management</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Upload and organize safety programs, COIs, OSHA logs, and incident reports by category.</p>
                         </div>
                      </div>
                      <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
                         <div className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up h-6 w-6 text-primary">
                                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                  <polyline points="16 7 22 7 22 13"></polyline>
                               </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Role-Based Access</h3>
                            <p className="text-muted-foreground" style={{color: "gray"}}>Secure multi-tenant platform with dedicated views for Carriers, Agents, and Insured organizations.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </section>
          </div>
       </div>
    </section>
    )
}

export default SectionAbout