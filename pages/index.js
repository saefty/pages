import { HomePage } from "../components/HomePage/HomePage";
import { PageConfig } from "../config";
function Home() {
  let home = <HomePage {...PageConfig.homePage} />;
  return home;
}

import pdfHelper from '../pdfHelper'
export async function getServerSideProps({req, res, query}) {
  const exportPDF = query.exportPDF === "true";
  const isServer = !!req;

  if (isServer && exportPDF) {
    const buffer = await pdfHelper.componentToPDFBuffer(
      <div>1</div>
    );

    // with this header, your browser will prompt you to download the file
    // without this header, your browse will open the pdf directly
    res.setHeader("Content-disposition", 'attachment; filename="export.pdf');

    // set content type
    res.setHeader("Content-Type", "application/pdf");

    // output the pdf buffer. once res.end is triggered, it won't trigger the render method
    res.end(buffer);
  }
	return { props: {} }
}

export default Home;
