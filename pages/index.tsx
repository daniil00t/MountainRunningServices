import Head from "next/head"
import MainLayout from "../layouts/MainLayout"
import MainSlider from "../layouts/main_layouts/MainSlider"

const Main = () => {
	return (
		<>
			<Head>
				<title>Mountaing Runnings</title>
				{/* <meta name="description" content="Generated by create next app" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<MainSlider />
			</MainLayout>
		</>
	)
}

export default Main
