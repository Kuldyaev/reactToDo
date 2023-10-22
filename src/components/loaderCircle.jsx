import { useSelector } from "react-redux";

const LoaderCircle = function LoaderCircle() {
  const isShowed = useSelector((state) => state.status.isLoaderShowed);

  return (
    <div
      className={"modalcontainer " + (isShowed ? "" : "hide")}
      id="modalcontainer"
    >
      <section className="loader" id="loader">
        <div className="blackmirrorLoading">
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
          <div className="blackmirrorLoading-part"></div>
        </div>
      </section>
    </div>
  );
};

export default LoaderCircle;
