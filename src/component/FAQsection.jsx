import { FAQ } from "../constant";
export const FAQsection = () => {
  return (
    <div className="flex flex-wrap mt-10 lg:mt-20">
  {FAQ.map((item, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
      <div className="flex flex-col mx-6 mb-20 p-4 bg-neutral-100 rounded-lg shadow-sm">
        <h50 className="mt-1 mb-4 text-lg font-semibold text-green-700">{item.question}</h50>
        <p className="text-md text-neutral-5000">{item.answer}</p>
      </div>
    </div>
  ))}
</div>

  )
}
export default FAQsection;