from app.schemas.user import UserRegister

user = UserRegister(
    full_name="Soham Dey",
    email="soham@gmail.com",
    password="Soham@123"
)

print(user)