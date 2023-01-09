import React from 'react'
import { Card } from 'antd';
export const CardPokemos = ({url}) => {
    const { Meta } = Card;
    console.log(url)
    
  return (
    <div>
        {
     url.results.map((r) => (
         <Card
    hoverable
    key={r.name}
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta>{r.name}</Meta>
  </Card>
   
      ))
  }
    </div>
  )
}
