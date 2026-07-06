import { getTranslations } from "next-intl/server";

export async function ChassisTable() {
  const t = await getTranslations("chassis");

  const rows = [
    {
      designation: "POLCERO-W4",
      type: t("w4_type"),
      env: t("w4_env"),
      markets: t("w4_markets"),
    },
    {
      designation: "POLCERO-T6",
      type: t("t6_type"),
      env: t("t6_env"),
      markets: t("t6_markets"),
    },
    {
      designation: "POLCERO-WL4",
      type: t("wl4_type"),
      env: t("wl4_env"),
      markets: t("wl4_markets"),
    },
    {
      designation: "POLCERO-Q4",
      type: t("q4_type"),
      env: t("q4_env"),
      markets: t("q4_markets"),
    },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--nl-border)]">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "var(--bg-chip)", borderBottom: "1px solid var(--nl-border)" }}>
            {[t("designation"), t("type"), t("environment"), t("markets")].map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.designation}
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid var(--nl-border)" : "none",
                background: i % 2 === 0 ? "var(--bg-card)" : "transparent",
              }}
            >
              <td className="px-5 py-3.5 font-mono font-bold text-[var(--accent)] text-xs">
                {row.designation}
              </td>
              <td className="px-5 py-3.5" style={{ color: "var(--text)" }}>{row.type}</td>
              <td className="px-5 py-3.5" style={{ color: "var(--text-muted)" }}>{row.env}</td>
              <td className="px-5 py-3.5" style={{ color: "var(--text-muted)" }}>{row.markets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
