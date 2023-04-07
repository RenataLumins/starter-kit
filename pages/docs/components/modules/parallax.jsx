import dynamic from 'next/dynamic'

const Parallax = dynamic(() =>
  import('@ui/modules/Parallax').then((module) => module.Parallax)
)



function ParallaxComponentsPage() {
	const parallaxSettings = [
		{
			start: '0px',
			end: '300px',
			properties: [
				{
					property: "rotate",
					startValue: 0,
					endValue: 90,
				},
				{
					property: "scale",
					startValue: 1,
					endValue: 1.5,
				},
				{
					property: "opacity",
					startValue: 1,
					endValue: 0.75,
				},
			],
		},
		{
			start: '350px',
			duration: '300', //miliseconds
			properties: [
				{
					property: "backgroundColor",
					startValue: "#3cb99c",
					endValue: "rgba(50,50,200,0.8)",
				},
				{
					property: "translateY",
					startValue: 0,
					endValue: 100,
				},
				{
					property: "opacity",
					startValue: 0.75,
					endValue: 1,
				},
			],
		},
	]

	return (
		<div className="ui-typography">
			<h1>Parallax</h1>

			<p>npm install --save react-plx</p>

			<div className="tw-h-[100vh] tw-mt-[450px]">
			<Parallax parallaxData={parallaxSettings} className="tw-text-white tw-fixed tw-top-[100px] tw-left-[50%] tw--translate-x-1/2 tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-rounded-[20px] tw-bg-[#34ba9c]">Hello!</Parallax>
			</div>
		</div>
	)
  }
  
  export default  ParallaxComponentsPage