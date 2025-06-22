import React from 'react';

function Tech() {
    return (
    <>
  <div className="news-topic">
    <div className="news-topic-name">Tin tức Thời Trang</div>
    <div className="readmore">
      Xem thêm <ion-icon name="chevron-forward-outline" />
    </div>
  </div>
  <div className="news-container">
    <div className="news-item">
      <img src={require("../img/technology/1.jpeg")} alt="" className="Nsi-img" />
      <div className="Nsi-name">FIFTH LABEL ANNOUNCES NEW HANOI FLAGSHIP: SPREADING THE SPIRIT OF VIETNAMESE STREETWEAR</div>
      <div className="Nsi-desc">Hanoi, June 2025 – After nearly two years establishing its presence in Ho Chi Minh City, Vietnamese streetwear brand FIFTH LABEL has officially expanded its footprint with the opening of its second store in Hanoi. This milestone marks a bold move in the brand’s strategy to build a comprehensive digital fashion ecosystem—blending in-person experiences with e-commerce innovation aimed at Gen Z.
</div>
    </div>
    <div className="news-item">
      <img src={require("../img/technology/2.jpeg")} alt="" className="Nsi-img" />
      <div className="Nsi-name">Có thật sự là “Không cần động tay” khi sử dụng Robot hút bụi? Một số lưu ý dành cho bạn...FIFTH LABEL x NOMAD STUDIO: URBAN RITUALS – WHEN STREETWEAR BECOMES VISUAL ART
.</div>
      <div className="Nsi-desc">Ho Chi Minh City, June 2025 – Amidst the rising wave of local fashion creativity in recent years, FIFTH LABEL has emerged as a pioneering brand that defines the lifestyle of Gen Z in Vietnam: fashion is not just something to wear, but a way to express identity and tell personal stories. Within this context, the latest collaboration between FIFTH LABEL and the visual artist collective Nomad Studio is garnering strong attention from the young creative community.
</div>
    </div>
    <div className="news-item">
      <img src={require("../img/technology/3.jpeg")} alt="" className="Nsi-img" />
      <div className="Nsi-name">DESIGN SPACE: URBAN AESTHETICS WITH LOCAL ROOTS</div>
      <div className="Nsi-desc">Located in Tay Ho—Hanoi’s emerging creative district—the new 120m² store features a minimalist urban aesthetic with polished concrete, natural lighting, and exposed industrial ceilings. The space is adorned with unique visual elements inspired by Indochine patterns, graffiti, and maps of Hanoi’s Old Quarter</div>
    </div>
    
  </div>
</>

  )
}

export default Tech