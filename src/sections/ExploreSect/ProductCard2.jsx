import ProductSlider from '../../components/ProductSlider/Productslider'
function ProductCard2() {

  return (
    <>
      <div className="w-full lg:h-auto flex flex-col  ">
        <div className="flex justify-center gap-2 items-center mb-10 mt-10 lg:mt-24">
          <h1 className="text-xl lg:text-2xl font-normal">EXPLORE OUR COLLECTIONS</h1>
        </div>
        <ProductSlider />
      </div>
    </>
  )
}

export default  ProductCard2;
