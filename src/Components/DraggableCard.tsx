import React from "react";
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
    toDoId: number;
    toDoText:string;
    index: number;
}

const DraggableCard = ({toDoId, toDoText, index}:IDraggableCardProps) => {
    return (
        <Draggable draggableId={toDoId+""} index={index}>
            {(magic, info) => (
                <Card
                isDragging={info.isDragging}
                ref={magic.innerRef}
                {...magic.dragHandleProps}
                {...magic.draggableProps}
              >
                {toDoText}
              </Card>
            )}
        </Draggable>
    )
}

export default React.memo(DraggableCard);

//React.memo 는 해당페이지 함수의 prop이 변하지 않는다면 그함수를 다시 렌더링
// 하지말라고 하는거다.
// 드래그앤드랍 아니면 이걸 쓸일이 생각이 별로안나는군.

// React.memo는 고차 컴포넌트(Higher Order Component)입니다.
// 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있습니다. 즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.
// React.memo는 props 변화에만 영향을 줍니다. React.memo로 감싸진 함수 컴포넌트 구현에 useState, useReducer 또는 useContext 훅을 사용한다면, 여전히 state나 context가 변할 때 다시 렌더링됩니다.
// 이 메서드는 오직 성능 최적화를 위하여 사용됩니다. 렌더링을 “방지”하기 위하여 사용하지 마세요. 버그를 만들 수 있습니다.