import Filterbtn from "./Fillterbtn"
import CategoriCard from "../components/CategoriCard"
function Categories() {
  return (
    <>
      <div className="w-[100%] border-t bg-white shadow-lg">
        <div className=" w-[90%] flex mt-[2.5rem] place-content-between mx-[5%]">
          <div className="w-[10%]">
            <Filterbtn /> {/* fillter */}
          </div>
          <div className="  w-[90%] flex gap-9">
            <CategoriCard
              img="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg"
              title="מטבחי שף"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
              title="חופים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg"
              title="מגדלים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
              title="קרוואנים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
              title="בתי האנוק"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg"
              title="בקתות טרולי"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg"
              title="דאמוסי"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
              title="ריאדים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg"
              title="מותאמים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"
              title="בתי קאסה פרטיקולר"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg"
              title="בתים קיקלאדיים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
              title="מכולות"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg"
              title="צריפים נגררים"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg"
              title="טחנות רוח"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg"
              title="בתי מינסו"
            />
            <CategoriCard
              img="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
              title="מדבר"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
