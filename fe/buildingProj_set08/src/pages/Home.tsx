import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Droppable,
  DragDropContext,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

import { useParams } from "react-router-dom";
import { getOneProject } from "../api/api";

export const Home = () => {
  const { projectID } = useParams();

  console.log(projectID);
  const data = [
    { id: "KLKnfghjlkhnkldnk", task: "clean house" },
    { id: "hjhvshvffhjfjhaehv", task: "clean class" },
    { id: "hjhvhvssddhjfjhaehv", task: "clean home" },
    { id: "hjhvhvbchjfjhaehv", task: "clean car" },
  ];

  let mainData = {
    todo: {
      title: "todo",
      data: data,
    },

    progress: {
      title: "progress",
      data: [],
    },
  };

  const [state, setState]: any = useState({});

  useEffect(() => {
    getOneProject(projectID!).then((res) => {
      // console.log(res.task);
      setState(res.task);
    });
  }, []);

  const onEnd = (res: any) => {
    console.log(res);
    const { source, destination } = res;

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      let soData = state[source.droppableId];
      let deData = state[destination.droppableId];

      let soItem = [...soData.data];
      let deItem = [...deData.data];

      let [remove] = soItem.splice(source.index, 1);
      deItem.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...soData,
          data: soItem,
        },
        [destination.droppableId]: {
          ...deData,
          data: deItem,
        },
      });
    } else {
      let data = state[source.droppableId];
      let item = [...data.data];

      let [remove] = item.splice(source.index, 1);
      item.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...data,
          data: item,
        },
      });

      console.log(item);
    }
  };

  // <Card>start</Card>

  console.log(Object.entries(state)[0]);
  return (
    <div>
      <Container>
        <Main>
          <Start>Project / Project Task</Start>

          <Project>Project Task ⭐</Project>
          <Detail>created at: </Detail>
          <Div>
            <DragDropContext onDragEnd={onEnd}>
              <Div>
                {Object.entries(state).map((props: any) => (
                  <Card>
                    <Title>{props[0]}</Title>
                    <Droppable droppableId={props[0]}>
                      {(
                        provided: DroppableProvided,
                        snapshot: DroppableStateSnapshot
                      ) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "",
                            margin: "10px 0",
                            padding: "10px 0",
                            minHeight: "200px",
                          }}
                        >
                          {props[1]?.data?.map((props: any, i: number) => (
                            <Draggable
                              draggableId={props.id}
                              key={props.id}
                              index={i}
                            >
                              {(
                                provided: DraggableProvided,
                                snapshot: DraggableStateSnapshot
                              ) => (
                                <TaskCard
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  ref={provided.innerRef}
                                  style={{
                                    ...provided.draggableProps.style,
                                  }}
                                  onClick={() => {
                                    console.log(props);
                                  }}
                                >
                                  {props}
                                </TaskCard>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Card>
                ))}
              </Div>
            </DragDropContext>
          </Div>
        </Main>
      </Container>
    </div>
  );
};

// const Div = styled.div``

const TaskCard = styled.div`
  width: 89%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  border: 1px solid silver;
  font-size: 12px;
`;

const Title = styled.div`
  margin: 10px 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
`;

const Div = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  background-color: #f7f8f9;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid silver;
`;

const Detail = styled.div`
  color: gray;
  font-size: 12px;
  margin-bottom: 20px;
`;

const Project = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Start = styled.div`
  color: gray;
  margin-bottom: 40px;
`;

const Main = styled.div``;

const Container = styled.div`
  width: 100%;
`;
