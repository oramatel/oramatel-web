export function VendorProof() {
  const vendors = [
    {
      name: "Fortinet",
      url: "https://static.cdnlogo.com/logos/f/34/fortinet.svg"
    },
    {
      name: "Cisco",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
    },
    {
      name: "Aruba",
      url: "https://static.cdnlogo.com/logos/a/38/aruba-networks.svg"
    },
    {
      name: "HPE",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg"
    },
    {
      name: "Unify",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png"
    },
    {
      name: "MikroTik",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/37/MikroTik_logo.svg"
    },
    {
      name: "Juniper",
      url: "https://static.cdnlogo.com/logos/j/4/juniper-networks.svg"
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-bold uppercase text-primary text-center">
            WE WORK WITH THE LEADING VENDORS
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center justify-items-center">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="relative w-full opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ height: "40px" }}
            >
              <img
                src={vendor.url}
                alt={vendor.name}
                className="w-auto h-full"
                style={{
                  filter: 'brightness(0) invert(1)',
                  mixBlendMode: 'screen',
                  objectFit: 'contain',
                  maxWidth: '120px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
