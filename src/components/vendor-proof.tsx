export function VendorProof() {
  const enterpriseVendors = [
    { name: "Cisco",   url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
    { name: "Fortinet", url: "https://static.cdnlogo.com/logos/f/34/fortinet.svg" },
    { name: "Aruba",   url: "https://static.cdnlogo.com/logos/a/38/aruba-networks.svg" },
    { name: "HPE",     url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg" },
    { name: "Juniper", url: "https://static.cdnlogo.com/logos/j/4/juniper-networks.svg" },
  ];

  const costEffectiveVendors = [
    { name: "Ubiquiti", url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png" },
    { name: "MikroTik", url: "https://upload.wikimedia.org/wikipedia/commons/3/37/MikroTik_logo.svg" },
  ];

  const logoStyle = {
    filter: "brightness(0) invert(1)",
    mixBlendMode: "screen" as const,
    objectFit: "contain" as const,
    maxWidth: "120px",
  };

  return (
    <section className="bg-black py-24">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="font-bold uppercase text-primary text-center">
            We Prescribe The Right Tool — Not The Highest-Margin One
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            We work across enterprise and cost-effective platforms. You get the solution that fits your requirements and budget — not the one with the biggest vendor rebate.
          </p>
        </div>

        {/* Tier 1 */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 mt-14">
          Enterprise &amp; Mid-Market
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center mb-14">
          {enterpriseVendors.map((vendor) => (
            <div
              key={vendor.name}
              className="relative w-full opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ height: "40px" }}
            >
              <img
                src={vendor.url}
                alt={vendor.name}
                className="w-auto h-full"
                style={logoStyle}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-10">
          <div className="flex-1 border-t border-white/10" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary whitespace-nowrap text-center px-2">
            Cost-Effective Alternatives · Same Features · No Per-Device Licensing
          </p>
          <div className="flex-1 border-t border-white/10" />
        </div>

        {/* Tier 2 */}
        <div className="w-full grid grid-cols-2 gap-12 items-center justify-items-center max-w-xs mx-auto">
          {costEffectiveVendors.map((vendor) => (
            <div
              key={vendor.name}
              className="relative w-full opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ height: "40px" }}
            >
              <img
                src={vendor.url}
                alt={vendor.name}
                className="w-auto h-full"
                style={logoStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
