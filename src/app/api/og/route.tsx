import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f6f2",
          color: "#111111",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "21px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#111111",
            }}
          />
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "88px",
              fontWeight: 600,
              letterSpacing: "-0.06em",
            }}
          >
            Dax Patel
          </div>
          <div
            style={{
              color: "#555555",
              fontSize: "28px",
              letterSpacing: "0.02em",
            }}
          >
            AI/ML Engineer · Researcher · Systems Builder
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #d8d7d2",
            paddingTop: "20px",
            color: "#555555",
            fontSize: "18px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>Data Quality</span>
          <span>Applied AI</span>
          <span>Research Systems</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
