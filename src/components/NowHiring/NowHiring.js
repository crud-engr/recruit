const NowHiring = () => {
  return (
    <div className="mt-10">
      <h2 className="text-purple font-medium text-2xl mb-3">Now Hiring</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowHiring;