import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SKIN@Mantraa — Premier Dermatology Clinic, Kanpur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 45%, #F8E8E0 75%, #FDF6EC 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,141,107,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,112,78,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #C4704E 0%, #D4A76A 50%, #C78D6B 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#C4704E",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            SKIN@MANTRAA
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#3D2B1F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Premier Dermatology
            <br />
            <span style={{ color: "#C4704E" }}>in Kanpur</span>
          </div>

          {/* Doctor info */}
          <div
            style={{
              fontSize: "26px",
              color: "#5C4033",
              marginTop: "8px",
            }}
          >
            Dr. Mamta Bhura · MBBS MD Dermatology · IMS BHU · 26+ Years
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, #C4704E, #D4A76A)",
              marginTop: "8px",
            }}
          />

          {/* Credentials strip */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "4px",
            }}
          >
            {["Laser Treatments", "Anti-Aging", "Acne & Scars", "Hair Restoration"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "6px 18px",
                  borderRadius: "999px",
                  background: "rgba(196,112,78,0.08)",
                  border: "1px solid rgba(196,112,78,0.25)",
                  fontSize: "18px",
                  color: "#7a3b1e",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* URL tag */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "48px",
            fontSize: "18px",
            color: "#C78D6B",
            letterSpacing: "0.04em",
          }}
        >
          skinmantraa.in
        </div>
      </div>
    ),
    { ...size }
  );
}
