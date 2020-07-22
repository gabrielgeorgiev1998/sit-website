import React from "react";
import { Spring } from "react-spring/renderprops";

export default function NewProjectCard(projectdata) {
  const [state, setState] = React.useState({
    showModal: false, 
    hovering: false
  });

  return (
    <>
      <Spring
        to={{
          transformCard: `scale(${state.hovering ? 1.05 : 1})`,
          transformPic: `scaleX(${state.hovering ? 1.5 : 1})`,
          pictureHeight: `${state.hovering ? '100%' : '64%'}`,
          paddingPic: `${state.hovering ? '2rem' : '0rem'}`
        }}
      >
        {props =>
          <>
            <button
              type="button"
              onMouseEnter={() => setState({ hovering: true, showModal: state.showModal })}
              onMouseLeave={() => setState({ hovering: false, showModal: state.showModal })}
              style={{ transform: props.transformCard, paddingRight: props.paddingPic, paddingLeft: props.paddingPic }}
              onClick={() => setState({ showModal: true })}
            >
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg outline-none h-74 focus:shadow-outline"
              >
                <img style={{ width: '100%', height: props.pictureHeight, transform: props.transformPic }} src={require(`../images/project-images/${projectdata.name}/${projectdata.frontimage}`)} alt={projectdata.name} />
                <div>
                  <div class="text-2xl manropereg" >{projectdata.displayname}</div>
                  <p class="text-gray-600 manrope">
                    {projectdata.description}
                  </p>
                </div>
              </div>
            </button>
            {state.showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  onClick={() => setState({ showModal: false, hovering: state.hovering })}
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          {projectdata.displayname}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setState({ showModal: false, hovering: state.hovering })}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                    </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-gray-600 text-lg leading-relaxed">
                          I always felt like I could do anything. That’s the main
                          thing people are controlled by! Thoughts- their perception
                          of themselves! They're slowed down by their perception of
                          themselves. If you're taught you can’t do anything, you
                          won’t do anything. I was taught I could do everything.
                  </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setState({ showModal: false, hovering: state.hovering })}
                        >
                          Close
                  </button>
                        <button
                          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setState({ showModal: false, hovering: state.hovering })}
                        >
                          Save Changes
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 absolute inset-0 z-40 bg-black w-screen h-full" onClick={() => setState({ showModal: false, hovering: state.hovering })}></div>
              </>
            ) : null}
          </>}</Spring>
    </>
  );
}

