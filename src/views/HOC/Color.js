import React from 'react';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Color: Đây được gọi là một HOC, nó nhận vào 1 component (ex:Home) và trả ra một component
//{...props}: copy all props from argument return (props)
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    return (props) => ( //props nay la cua component WrappedComponent
    // là có props như nào thì cần truyền (tối thiểu) sang như vậy (sang wrappedComponent sau khi đã bọc bởi HOC). 
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} /> 
        </div>
    )

}
export default Color;