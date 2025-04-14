import ProductSlider from '../../components/ProductSlider/Productslider'
function ProductCard2() {

  return (
    <>
      <div className="w-full max-h-screen h-screen flex flex-col  xss:h-[65vh]">
        <div className="flex flex-col gap-2 items-center mb-10 mt-10 lg:mt-24">
          <h1 className="text-xl lg:text-2xl font-normal">EXPLORE THE COLLECTIONS</h1>
        </div>
        <ProductSlider />
      </div>
    </>
  )
}

export default  ProductCard2;
