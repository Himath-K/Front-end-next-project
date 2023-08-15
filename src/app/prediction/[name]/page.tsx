const getPredictedAge = async (name: string) => {
  const res = await fetch(`http://api.agify.io/?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name: string) => {
  const res = await fetch(`http://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`http://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: {
    name: string;
  };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg">
  <div className="mb-4">
    <h1 className="text-2xl font-semibold mb-2 text-gray-700">User Profile</h1>
    <hr className="border-t-2 border-gray-300" />
  </div>
  <div className="mb-2">
    <h1 className="text-lg font-semibold mb-1 text-gray-700">Age:</h1>
    <p className="text-gray-700 text-xl">{age?.age}</p>
  </div>
  <div className="mb-2">
    <h1 className="text-lg font-semibold mb-1 text-gray-700">Gender:</h1>
    <p className="text-gray-700 text-xl">{gender?.gender}</p>
  </div>
  <div>
    <h1 className="text-lg font-semibold mb-1 text-gray-700">Country:</h1>
    <p className="text-gray-700 text-xl">
      {country?.country[0]?.country_id}
    </p>
  </div>
</div>
  );
}
