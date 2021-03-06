class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :memos
  has_many :tags
  has_many :folders
  has_many :events
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  # validates :email, presence: true
  validates :password, presence: true
end
