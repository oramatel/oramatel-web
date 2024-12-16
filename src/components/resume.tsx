import { Calendar } from "lucide-react";

const steps = [
  {
    number: "October 2024 - Present",
    title: "Technology Solutions Engineer 'The main guy' at Oramatel",
    description: `At Oramatel, we specialize in transforming complex networking challenges into elegant, efficient solutions.

Key Focus Areas:
• Advanced Network Infrastructure
Design and implementation of sophisticated network infrastructures featuring seamless multimodal integration and robust remote access capabilities, ensuring optimal branch connectivity and efficiency.

• Enterprise Solutions Architecture
Transform technological expansion into strategic advantage through comprehensive enterprise network solutions, ensuring seamless integration and minimal disruption across organizational ecosystems.

• Process Automation & Optimization
Development of intelligent automation solutions that reduce operational costs, minimize human error, and accelerate innovation through strategic workflow optimization and advanced technologies.

• Network Topology Innovation
Transformation of complex network topologies into streamlined, scalable ecosystems that adapt to dynamic business connectivity needs.

• Strategic Technology Integration
Implementation of cutting-edge solutions that bridge traditional boundaries while maintaining robust security and performance standards.`
  },
  {
    number: "October 2019 - June 2024",
    title: "Senior Network Engineer | Tech Lead | Professional Services at blueAPACHE",
    description: `In my role as a Senior Network Engineer in the Professional Services division, I have been entrusted with a range of pivotal responsibilities aimed at delivering exceptional value to our clients.

Key Responsibilities:
• Leadership and Team Support
Leading a highly skilled engineering team, providing guidance and mentorship while actively supporting the delivery of secure network and system solutions.

• Secure Network Rollouts
Planning and executing highly secure network rollout projects, including hands-on deployment and ongoing support to maintain highest security standards.

• Collaborative Engagement
Serving as primary liaison between Project Managers, business units, and vendors to facilitate seamless implementation of new client infrastructure and system upgrades.

• Subject Matter Expertise
Acting as SME in network technology, interfacing with internal and external stakeholders to provide technical guidance and support informed decision-making.

• Comprehensive Documentation
Creating detailed design documents (HLD/LLD) and As-Built documentation to ensure clear, replicable network solutions.`
  },
  {
    number: "July 2016 - October 2019",
    title: "Senior Network Engineer at Access4",
    description: `Access4 provides the UCaaS and CCaaS technology of choice using BroadSoft, making it simple and available in deployments of all sizes so partners can provide solutions to their customers. The customer is able to deal with the IT provider they trust, and gain access to leading technology on a per user basis. We strive to be an employer of choice recognising that it's people that make a difference to service, while creating optimal value through service excellence and innovation.

Key Achievements:
• Network Infrastructure
Designed, implemented, managed and operated the national MPLS network to support the company's various Data, Voice and Internet service offerings. This was a multivendor network setup consisting of Cisco, Juniper and Brocade hardware.

• Routing & Edge Infrastructure
Designed, implemented, managed and operated the transit and peering BGP routing policy and Internet Edge network infrastructure with Juniper's MX series routers.

• Security Infrastructure
Designed, implemented, managed and operated the Corporate Internet Access and DMZ network infrastructure with Juniper SRX firewalls in HA configuration. Deployed Juniper SRX SSL VPN services with Pulse Secure VPN clients.

• Process Improvement
Introduced standards relating to IT procedures leading to improved network efficiency and a 20% reduction in downtime.

• Email & Communication Systems
Designed, implemented, managed and operated the email systems backend to support the Broadsoft/Broadworks voicemail service, including auto-provisioning of new voicemail boxes upon service activation.

• Core Services Management
Designed, implemented and maintained clustered DNS, NTP, POP/IMAP, and SMTP services.

• Access Infrastructure
Designed, implemented and maintained the LNS and Radius backend infrastructure to support the carrier's L2TP aggregation and direct PPPoE services.`
  },
  {
    number: "April 2011 - July 2016",
    title: "Senior Network and Systems Engineer at Asian Pacific Telecommunications",
    description: `Key Achievements:
• Project Management & Implementation
Led the design, installation, and implementation of IT infrastructure for a Hotel chain involving 2500+ rooms to support wired and wireless hotspot and VOIP communications.

• Business & Financial Planning
Provided budgetary estimations and BoM from various vendors for data network equipment and maintenance. Contributed valuable input affecting business and infrastructure project outcomes.

• Technical Operations & Support
Conducted root cause analysis to determine and resolve system issues. Established and maintained relationships with third parties, vendors and clients.

• Core Infrastructure Services
Designed, implemented and maintained clustered DHCP, DNS, POP/IMAP, and SMTP services. Developed and maintained in-house distributed monitoring system based on open source applications and custom scripts, eliminating dependency on third-party monitoring services.

• Service Innovation & Development
Introduced new value-added services creating additional revenue streams. Implemented new provisioning tools to streamline service delivery.

• Custom Development & Automation
Developed web-based configuration tool for Fortinet FortiWifi F60C deployments, enabling technician self-service. Created applications for managing, reporting and monitoring Asterisk-based call queuing and conference room products.

• Security Infrastructure
Proposed, tested and deployed virtual appliance firewalls based on Monowall and Pfsense for cloud-based offerings. Implemented virtual and physical Fortinet firewalls including FortiAnalyzer.

• Network Design & Administration
Conducted site surveys for dual-band WiFi network design. Administered 5-node CUCM cluster and customer endpoints.`
  },

];

export function Resume() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">

        <span className="font-bold uppercase text-primary text-center">
          Hi!, I am David Oramas
        </span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center font-heading">         
          This is My Resume
        </h2>
      </div>

      <ol className="relative border-l border-border">
        {steps.map((step) => (
          <li key={step.number} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
              <Calendar className="w-3 h-3 text-primary-foreground" />
            </span>
            <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
              {step.number}
            </time>
            <h3 className="text-lg font-semibold text-foreground mt-2 font-heading">
              {step.title}
            </h3>
            <div className="text-muted-foreground whitespace-pre-line">
              <p className="mb-4 text-base font-normal">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
