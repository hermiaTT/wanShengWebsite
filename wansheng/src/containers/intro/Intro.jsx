import React from 'react';
import Feature from '../../components/feature/feature';
import './intro.css'
const Intro = () => {
  return (
    <div className='ws__intro section__margin' id="intro">
      <div className='ws__intro-feature'>
        <Feature title= "万盛建设" />
      </div>
      <div className='ws__intro-heading'>
        <h1 className='gradient__text'>提供定制化服务</h1>
        <p>Explore the library</p>
      </div>
      <div className='ws__intro-container'>
        <Feature title="室内装修" text="对每位客户的家给予精心、细致的防护，确保家装施工过程稳妥可靠 | 工程中的每个环节、工艺都有严格的施工规范和验收标准，确保每个环节到位可靠 | 施工现场材料的堆放、保管、防护制定了有效的管理制度，确保施工质量始终如一。" />
        <Feature title="定制服务" text="设计师为你精准做出装修方案，保证你的每一个细节都符合政府要求。不需再担心政府审批，我们为你全部搞定。" />
        <Feature title="商业工程" text="工程公司均拥有WCB劳工保险,五百万工程保险，项目总监全程监理保证现场工地质量，解决客户问题。一流服务和专业技术，让你的工程更有保障。" />
      </div>
    </div>
  )
}

export default Intro