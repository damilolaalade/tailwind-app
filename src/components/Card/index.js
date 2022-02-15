import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";

const Cards = ({ ...otherProps }) => {
  return (
    <div className="flex flex-row flex-wrap py-14 justify-center">
      {/* image1 */}
      
              <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
              <div className="bg-white">
          <div>
            <img src={Card1} alt="picture1" className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">Title:</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description:</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* image2 */}
      
          <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          <div className="bg-white">
          <div>
            <img src={Card2} alt="picture2" className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">Title:</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description:</span>
              </li>
            </ul>
          </div>
        </div>
          </div>
          
      {/* image3 */}
     
          <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          <div className="bg-white">
          <div>
            <img src={Card3} alt="picture3" className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">Title:</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description:</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
