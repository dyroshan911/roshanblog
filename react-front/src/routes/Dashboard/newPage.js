// import React, { PureComponent } from 'react';
// export default class Workplace extends PureComponent {
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }
//import React from 'react';
import React, { PureComponent } from 'react';
import ImageWrapper from 'components/ImageWrapper';  // 注意保证引用路径的正确

export default class Workplace extends PureComponent {
  render() {
    return (
        <ImageWrapper src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png" desc="示意图"/>
    );
  }
}