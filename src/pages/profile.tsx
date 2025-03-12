import { useState } from "react";
import Sidebar from "@/components/sidebar";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Marzuli Suhada M",
    email: "marzuli@example.com",
    bio: "Undergraduate Informatics Engineering Student at ITB",
    phone: "+62 812-3456-7890",
    location: "Bandung, Indonesia",
    avatar: "@/assets/breathing.png",
  });

  const [editData, setEditData] = useState(user);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 relative">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Profile</h2>
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile Picture"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
              />
              {isEditing && (
                <input
                  type="file"
                  className="absolute bottom-0 left-8 bg-white opacity-80 p-1 rounded-lg cursor-pointer"
                />
              )}
            </div>
            {!isEditing ? (
              <div className="text-center">
                <p className="text-xl font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.phone}</p>
                <p className="text-gray-600">{user.location}</p>
                <p className="mt-2 text-gray-700">{user.bio}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={editData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={editData.location}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700">Bio</label>
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md mt-1"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;