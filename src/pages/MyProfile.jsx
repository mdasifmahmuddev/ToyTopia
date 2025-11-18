import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaImage, FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    document.title = "My Profile - ToyTopia";
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral">My Profile</h1>
          <div className="h-1 w-12 bg-primary rounded-full mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="flex flex-col items-center text-center">
              <div className="avatar mb-4">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img 
                    src={user?.photoURL || "https://via.placeholder.com/150"} 
                    alt={user?.displayName || "User"} 
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold text-neutral mb-1">
                {user?.displayName || "Anonymous User"}
              </h2>
              <p className="text-sm text-neutral/60 mb-3">{user?.email}</p>
              <span className="badge badge-primary">Active Member</span>
            </div>
          </div>

          <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaEdit className="text-primary" />
              <h3 className="text-lg font-bold text-neutral">Edit Profile</h3>
            </div>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <FaUser className="text-primary text-xs" />
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <FaImage className="text-primary text-xs" />
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter photo URL"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <FaEnvelope className="text-primary text-xs" />
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  className="input input-bordered w-full bg-base-200"
                  disabled
                />
                <label className="label">
                  <span className="label-text-alt text-neutral/50">Email cannot be changed</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;