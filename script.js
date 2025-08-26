// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("callbackForm");
    const responseDiv = document.getElementById("formResponse");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    responseDiv.style.display = "block";
                    responseDiv.style.color = "green";
                    responseDiv.textContent = "Thank you! Your enquiry has been sent.";
                    form.reset();
                } else {
                    responseDiv.style.display = "block";
                    responseDiv.style.color = "red";
                    responseDiv.textContent = "Oops! There was a problem submitting your enquiry.";
                }
            });
        });
    }
});
    
    // Add structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": "Berkshire Emergency Plumbers",
        "description": "24/7 Emergency Plumber in Berkshire. Fast response, no call-out fee. Fixed prices, local plumbers available anytime for plumbing emergencies.",
        "url": "https://www.berkshireemergencyplumbers.co.uk",
        "telephone": "+44-118-901-2345",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Berkshire",
            "addressCountry": "UK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.4226",
            "longitude": "-0.6429"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "51.4226",
                "longitude": "-0.6429"
            },
            "geoRadius": "30000"
        },
        "sameAs": [
            "https://www.facebook.com/berkshireemergencyplumbers",
            "https://twitter.com/berkshireplumb",
            "https://www.instagram.com/berkshireemergencyplumbers"
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
});
