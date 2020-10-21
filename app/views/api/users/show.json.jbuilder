# json.extract! @user, :id, :username, :email
json.partial! "api/users/user", user: @user

# json.extract! @cart

# also need to render cart info
