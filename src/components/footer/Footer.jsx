import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import SectionContainer from "../../utils/SectionContainer";

export default function Footer() {
  return (
    <SectionContainer>
      <footer className="bg-[#0F1824] text-gray-300 mt-4 py-14  px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  MyExam EduBlogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Public notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Transfer policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Popular goals</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  NEET UG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  JEE Advanced
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  6th to 10th
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Ultimate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Distance learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Online Test Series
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Centers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Kota
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Indore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Delhi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  More centres
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Exam information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  JEE Main
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  JEE Advanced
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  NEET UG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Class 10
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Class 12
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Olympiad Exam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  NEET Online Test Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  JEE Online Test Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  JEE Main Online Test Series
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
