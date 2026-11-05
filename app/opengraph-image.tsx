import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #102538 0%, #1b3b5f 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 110,
              height: 110,
              borderRadius: "50%",
              border: "3px solid #c9a227",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            FT69
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: 1 }}>
              FORCE TAXI 69
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#c9a227",
                letterSpacing: 4,
                marginTop: 8,
              }}
            >
              SYNDICAT DE TAXIS · LYON · FNDT
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#eef1f4",
          }}
        >
          La force du collectif
        </div>
      </div>
    ),
    { ...size }
  );
}
