import Papa from "papaparse";

export async function getSheets() {
  try {
    const file = await fetch(process.env.ALUMNOS, { cache: "no-store" }).then(res => res.text())

    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => resolve(result.data),
        error: reject,
      });
    });
  } catch (error) {
    console.error("CSV Parsing error:", error);
    return [];
  }
}