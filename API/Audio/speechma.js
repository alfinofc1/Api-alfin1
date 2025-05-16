const axios = require("axios");
const { FormData, Blob } = require("formdata-node");

class SpeechmaTTS {
  constructor() {
    this.baseUrl = "https://speechma.com/com.api/tts-api.php";
    this.uploadUrl = "https://i.supa.codes/api/upload";
    this.client = axios.create({ withCredentials: true });
    this.voices = [
    { id: 'voice-107', name: 'Andrew Multilingual', gender: 'Male', language: 'Multilingual', country: 'United States' },
    { id: 'voice-110', name: 'Ava Multilingual', gender: 'Female', language: 'Multilingual', country: 'United States' },
    { id: 'voice-112', name: 'Brian Multilingual', gender: 'Male', language: 'Multilingual', country: 'United States' },
    { id: 'voice-115', name: 'Emma Multilingual', gender: 'Female', language: 'Multilingual', country: 'United States' },
    { id: 'voice-142', name: 'Remy Multilingual', gender: 'Male', language: 'Multilingual', country: 'France' },
    { id: 'voice-143', name: 'Vivienne Multilingual', gender: 'Female', language: 'Multilingual', country: 'France' },
    { id: 'voice-154', name: 'Florian Multilingual', gender: 'Male', language: 'Multilingual', country: 'Germany' },
    { id: 'voice-157', name: 'Seraphina Multilingual', gender: 'Female', language: 'Multilingual', country: 'Germany' },
    { id: 'voice-177', name: 'Giuseppe Multilingual', gender: 'Male', language: 'Multilingual', country: 'Italy' },
    { id: 'voice-189', name: 'Hyunsu Multilingual', gender: 'Male', language: 'Multilingual', country: 'South Korea' },
    { id: 'voice-222', name: 'Thalita Multilingual', gender: 'Female', language: 'Multilingual', country: 'Brazil' },
    { id: 'voice-106', name: 'Ana', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-108', name: 'Andrew', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-109', name: 'Aria', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-111', name: 'Ava', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-113', name: 'Brian', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-114', name: 'Christopher', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-116', name: 'Emma', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-117', name: 'Eric', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-118', name: 'Guy', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-119', name: 'Jenny', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-120', name: 'Michelle', gender: 'Female', language: 'English', country: 'United States' },
    { id: 'voice-121', name: 'Roger', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-122', name: 'Steffan', gender: 'Male', language: 'English', country: 'United States' },
    { id: 'voice-82', name: 'Libby', gender: 'Female', language: 'English', country: 'United Kingdom' },
    { id: 'voice-83', name: 'Maisie', gender: 'Female', language: 'English', country: 'United Kingdom' },
    { id: 'voice-84', name: 'Ryan', gender: 'Male', language: 'English', country: 'United Kingdom' },
    { id: 'voice-85', name: 'Sonia', gender: 'Female', language: 'English', country: 'United Kingdom' },
    { id: 'voice-86', name: 'Thomas', gender: 'Male', language: 'English', country: 'United Kingdom' },
    { id: 'voice-78', name: 'Natasha', gender: 'Female', language: 'English', country: 'Australia' },
    { id: 'voice-79', name: 'William', gender: 'Male', language: 'English', country: 'Australia' },
    { id: 'voice-80', name: 'Clara', gender: 'Female', language: 'English', country: 'Canada' },
    { id: 'voice-81', name: 'Liam', gender: 'Male', language: 'English', country: 'Canada' },
    { id: 'voice-91', name: 'Neerja Expressive', gender: 'Female', language: 'English', country: 'India' },
    { id: 'voice-92', name: 'Neerja', gender: 'Female', language: 'English', country: 'India' },
    { id: 'voice-93', name: 'Prabhat', gender: 'Male', language: 'English', country: 'India' },
    { id: 'voice-87', name: 'Sam', gender: 'Male', language: 'English', country: 'Hong Kong' },
    { id: 'voice-88', name: 'Yan', gender: 'Female', language: 'English', country: 'Hong Kong' },
    { id: 'voice-89', name: 'Connor', gender: 'Male', language: 'English', country: 'Ireland' },
    { id: 'voice-90', name: 'Emily', gender: 'Female', language: 'English', country: 'Ireland' },
    { id: 'voice-94', name: 'Asilia', gender: 'Female', language: 'English', country: 'Kenya' },
    { id: 'voice-95', name: 'Chilemba', gender: 'Male', language: 'English', country: 'Kenya' },
    { id: 'voice-96', name: 'Abeo', gender: 'Male', language: 'English', country: 'Nigeria' },
    { id: 'voice-97', name: 'Ezinne', gender: 'Female', language: 'English', country: 'Nigeria' },
    { id: 'voice-98', name: 'Mitchell', gender: 'Male', language: 'English', country: 'New Zealand' },
    { id: 'voice-99', name: 'Molly', gender: 'Female', language: 'English', country: 'New Zealand' },
    { id: 'voice-100', name: 'James', gender: 'Male', language: 'English', country: 'Philippines' },
    { id: 'voice-101', name: 'Rosa', gender: 'Female', language: 'English', country: 'Philippines' },
    { id: 'voice-102', name: 'Luna', gender: 'Female', language: 'English', country: 'Singapore' },
    { id: 'voice-103', name: 'Wayne', gender: 'Male', language: 'English', country: 'Singapore' },
    { id: 'voice-104', name: 'Elimu', gender: 'Male', language: 'English', country: 'Tanzania' },
    { id: 'voice-105', name: 'Imani', gender: 'Female', language: 'English', country: 'Tanzania' },
    { id: 'voice-123', name: 'Leah', gender: 'Female', language: 'English', country: 'South Africa' },
    { id: 'voice-124', name: 'Luke', gender: 'Male', language: 'English', country: 'South Africa' },
    { id: 'voice-239', name: 'Elena', gender: 'Female', language: 'Spanish', country: 'Argentina' },
    { id: 'voice-240', name: 'Tomas', gender: 'Male', language: 'Spanish', country: 'Argentina' },
    { id: 'voice-241', name: 'Marcelo', gender: 'Male', language: 'Spanish', country: 'Bolivia' },
    { id: 'voice-242', name: 'Sofia', gender: 'Female', language: 'Spanish', country: 'Bolivia' },
    { id: 'voice-243', name: 'Catalina', gender: 'Female', language: 'Spanish', country: 'Chile' },
    { id: 'voice-244', name: 'Lorenzo', gender: 'Male', language: 'Spanish', country: 'Chile' },
    { id: 'voice-245', name: 'Gonzalo', gender: 'Male', language: 'Spanish', country: 'Colombia' },
    { id: 'voice-246', name: 'Salome', gender: 'Female', language: 'Spanish', country: 'Colombia' },
    { id: 'voice-247', name: 'Juan', gender: 'Male', language: 'Spanish', country: 'Costa Rica' },
    { id: 'voice-248', name: 'Maria', gender: 'Female', language: 'Spanish', country: 'Costa Rica' },
    { id: 'voice-249', name: 'Belkys', gender: 'Female', language: 'Spanish', country: 'Cuba' },
    { id: 'voice-250', name: 'Manuel', gender: 'Male', language: 'Spanish', country: 'Cuba' },
    { id: 'voice-251', name: 'Emilio', gender: 'Male', language: 'Spanish', country: 'Dominican Republic' },
    { id: 'voice-252', name: 'Ramona', gender: 'Female', language: 'Spanish', country: 'Dominican Republic' },
    { id: 'voice-253', name: 'Andrea', gender: 'Female', language: 'Spanish', country: 'Ecuador' },
    { id: 'voice-254', name: 'Luis', gender: 'Male', language: 'Spanish', country: 'Ecuador' },
    { id: 'voice-255', name: 'Alvaro', gender: 'Male', language: 'Spanish', country: 'Spain' },
    { id: 'voice-256', name: 'Elvira', gender: 'Female', language: 'Spanish', country: 'Spain' },
    { id: 'voice-257', name: 'Ximena', gender: 'Female', language: 'Spanish', country: 'Spain' },
    { id: 'voice-258', name: 'Javier', gender: 'Male', language: 'Spanish', country: 'Equatorial Guinea' },
    { id: 'voice-259', name: 'Teresa', gender: 'Female', language: 'Spanish', country: 'Equatorial Guinea' },
    { id: 'voice-260', name: 'Andres', gender: 'Male', language: 'Spanish', country: 'Guatemala' },
    { id: 'voice-261', name: 'Marta', gender: 'Female', language: 'Spanish', country: 'Guatemala' },
    { id: 'voice-262', name: 'Carlos', gender: 'Male', language: 'Spanish', country: 'Honduras' },
    { id: 'voice-263', name: 'Karla', gender: 'Female', language: 'Spanish', country: 'Honduras' },
    { id: 'voice-264', name: 'Dalia', gender: 'Female', language: 'Spanish', country: 'Mexico' },
    { id: 'voice-265', name: 'Jorge', gender: 'Male', language: 'Spanish', country: 'Mexico' },
    { id: 'voice-266', name: 'Federico', gender: 'Male', language: 'Spanish', country: 'Nicaragua' },
    { id: 'voice-267', name: 'Yolanda', gender: 'Female', language: 'Spanish', country: 'Nicaragua' },
    { id: 'voice-268', name: 'Margarita', gender: 'Female', language: 'Spanish', country: 'Panama' },
    { id: 'voice-269', name: 'Roberto', gender: 'Male', language: 'Spanish', country: 'Panama' },
    { id: 'voice-270', name: 'Alex', gender: 'Male', language: 'Spanish', country: 'Peru' },
    { id: 'voice-271', name: 'Camila', gender: 'Female', language: 'Spanish', country: 'Peru' },
    { id: 'voice-272', name: 'Karina', gender: 'Female', language: 'Spanish', country: 'Puerto Rico' },
    { id: 'voice-273', name: 'Victor', gender: 'Male', language: 'Spanish', country: 'Puerto Rico' },
    { id: 'voice-274', name: 'Mario', gender: 'Male', language: 'Spanish', country: 'Paraguay' },
    { id: 'voice-275', name: 'Tania', gender: 'Female', language: 'Spanish', country: 'Paraguay' },
    { id: 'voice-276', name: 'Lorena', gender: 'Female', language: 'Spanish', country: 'El Salvador' },
    { id: 'voice-277', name: 'Rodrigo', gender: 'Male', language: 'Spanish', country: 'El Salvador' },
    { id: 'voice-278', name: 'Alonso', gender: 'Male', language: 'Spanish', country: 'United States' },
    { id: 'voice-279', name: 'Paloma', gender: 'Female', language: 'Spanish', country: 'United States' },
    { id: 'voice-280', name: 'Mateo', gender: 'Male', language: 'Spanish', country: 'Uruguay' },
    { id: 'voice-281', name: 'Valentina', gender: 'Female', language: 'Spanish', country: 'Uruguay' },
    { id: 'voice-282', name: 'Paola', gender: 'Female', language: 'Spanish', country: 'Venezuela' },
    { id: 'voice-283', name: 'Sebastian', gender: 'Male', language: 'Spanish', country: 'Venezuela' },
    { id: 'voice-53', name: 'Xiaoxiao', gender: 'Female', language: 'Chinese', country: 'China' },
    { id: 'voice-54', name: 'Xiaoyi', gender: 'Female', language: 'Chinese', country: 'China' },
    { id: 'voice-55', name: 'Yunjian', gender: 'Male', language: 'Chinese', country: 'China' },
    { id: 'voice-56', name: 'Yunxi', gender: 'Male', language: 'Chinese', country: 'China' },
    { id: 'voice-57', name: 'Yunxia', gender: 'Male', language: 'Chinese', country: 'China' },
    { id: 'voice-58', name: 'Yunyang', gender: 'Male', language: 'Chinese', country: 'China' },
    { id: 'voice-59', name: 'Xiaobei', gender: 'Female', language: 'Chinese', country: 'China' },
    { id: 'voice-60', name: 'Xiaoni', gender: 'Female', language: 'Chinese', country: 'China' },
    { id: 'voice-61', name: 'HiuGaai', gender: 'Female', language: 'Chinese', country: 'Hong Kong' },
    { id: 'voice-62', name: 'HiuMaan', gender: 'Female', language: 'Chinese', country: 'Hong Kong' },
    { id: 'voice-63', name: 'WanLung', gender: 'Male', language: 'Chinese', country: 'Hong Kong' },
    { id: 'voice-64', name: 'HsiaoChen', gender: 'Female', language: 'Chinese', country: 'Taiwan' },
    { id: 'voice-65', name: 'HsiaoYu', gender: 'Female', language: 'Chinese', country: 'Taiwan' },
    { id: 'voice-66', name: 'YunJhe', gender: 'Male', language: 'Chinese', country: 'Taiwan' },
    { id: 'voice-131', name: 'Charline', gender: 'Female', language: 'French', country: 'Belgium' },
    { id: 'voice-132', name: 'Gerard', gender: 'Male', language: 'French', country: 'Belgium' },
    { id: 'voice-133', name: 'Antoine', gender: 'Male', language: 'French', country: 'Canada' },
    { id: 'voice-134', name: 'Jean', gender: 'Male', language: 'French', country: 'Canada' },
    { id: 'voice-135', name: 'Sylvie', gender: 'Female', language: 'French', country: 'Canada' },
    { id: 'voice-136', name: 'Thierry', gender: 'Male', language: 'French', country: 'Canada' },
    { id: 'voice-137', name: 'Ariane', gender: 'Female', language: 'French', country: 'Switzerland' },
    { id: 'voice-138', name: 'Fabrice', gender: 'Male', language: 'French', country: 'Switzerland' },
    { id: 'voice-139', name: 'Denise', gender: 'Female', language: 'French', country: 'France' },
    { id: 'voice-140', name: 'Eloise', gender: 'Female', language: 'French', country: 'France' },
    { id: 'voice-141', name: 'Henri', gender: 'Male', language: 'French', country: 'France' },
    { id: 'voice-148', name: 'Ingrid', gender: 'Female', language: 'German', country: 'Austria' },
    { id: 'voice-149', name: 'Jonas', gender: 'Male', language: 'German', country: 'Austria' },
    { id: 'voice-150', name: 'Jan', gender: 'Male', language: 'German', country: 'Switzerland' },
    { id: 'voice-151', name: 'Leni', gender: 'Female', language: 'German', country: 'Switzerland' },
    { id: 'voice-152', name: 'Amala', gender: 'Female', language: 'German', country: 'Germany' },
    { id: 'voice-153', name: 'Conrad', gender: 'Male', language: 'German', country: 'Germany' },
    { id: 'voice-155', name: 'Katja', gender: 'Female', language: 'German', country: 'Germany' },
    { id: 'voice-156', name: 'Killian', gender: 'Male', language: 'German', country: 'Germany' },
    { id: 'voice-7', name: 'Fatima', gender: 'Female', language: 'Arabic', country: 'United Arab Emirates' },
    { id: 'voice-8', name: 'Hamdan', gender: 'Male', language: 'Arabic', country: 'United Arab Emirates' },
    { id: 'voice-9', name: 'Ali', gender: 'Male', language: 'Arabic', country: 'Bahrain' },
    { id: 'voice-10', name: 'Laila', gender: 'Female', language: 'Arabic', country: 'Bahrain' },
    { id: 'voice-11', name: 'Amina', gender: 'Female', language: 'Arabic', country: 'Algeria' },
    { id: 'voice-12', name: 'Ismael', gender: 'Male', language: 'Arabic', country: 'Algeria' },
    { id: 'voice-13', name: 'Salma', gender: 'Female', language: 'Arabic', country: 'Egypt' },
    { id: 'voice-14', name: 'Shakir', gender: 'Male', language: 'Arabic', country: 'Egypt' },
    { id: 'voice-15', name: 'Bassel', gender: 'Male', language: 'Arabic', country: 'Iraq' },
    { id: 'voice-16', name: 'Rana', gender: 'Female', language: 'Arabic', country: 'Iraq' },
    { id: 'voice-17', name: 'Sana', gender: 'Female', language: 'Arabic', country: 'Jordan' },
    { id: 'voice-18', name: 'Taim', gender: 'Male', language: 'Arabic', country: 'Jordan' },
    { id: 'voice-19', name: 'Fahed', gender: 'Male', language: 'Arabic', country: 'Kuwait' },
    { id: 'voice-20', name: 'Noura', gender: 'Female', language: 'Arabic', country: 'Kuwait' },
    { id: 'voice-21', name: 'Layla', gender: 'Female', language: 'Arabic', country: 'Lebanon' },
    { id: 'voice-22', name: 'Rami', gender: 'Male', language: 'Arabic', country: 'Lebanon' },
    { id: 'voice-23', name: 'Iman', gender: 'Female', language: 'Arabic', country: 'Libya' },
    { id: 'voice-24', name: 'Omar', gender: 'Male', language: 'Arabic', country: 'Libya' },
    { id: 'voice-25', name: 'Jamal', gender: 'Male', language: 'Arabic', country: 'Morocco' },
    { id: 'voice-26', name: 'Mouna', gender: 'Female', language: 'Arabic', country: 'Morocco' },
    { id: 'voice-27', name: 'Abdullah', gender: 'Male', language: 'Arabic', country: 'Oman' },
    { id: 'voice-28', name: 'Aysha', gender: 'Female', language: 'Arabic', country: 'Oman' },
    { id: 'voice-29', name: 'Amal', gender: 'Female', language: 'Arabic', country: 'Qatar' },
    { id: 'voice-30', name: 'Moaz', gender: 'Male', language: 'Arabic', country: 'Qatar' },
    { id: 'voice-31', name: 'Hamed', gender: 'Male', language: 'Arabic', country: 'Saudi Arabia' },
    { id: 'voice-32', name: 'Zariyah', gender: 'Female', language: 'Arabic', country: 'Saudi Arabia' },
    { id: 'voice-33', name: 'Amany', gender: 'Female', language: 'Arabic', country: 'Syria' },
    { id: 'voice-34', name: 'Laith', gender: 'Male', language: 'Arabic', country: 'Syria' },
    { id: 'voice-35', name: 'Hedi', gender: 'Male', language: 'Arabic', country: 'Tunisia' },
    { id: 'voice-36', name: 'Reem', gender: 'Female', language: 'Arabic', country: 'Tunisia' },
    { id: 'voice-37', name: 'Maryam', gender: 'Female', language: 'Arabic', country: 'Yemen' },
    { id: 'voice-38', name: 'Saleh', gender: 'Male', language: 'Arabic', country: 'Yemen' },
    { id: 'voice-1', name: 'Adri', gender: 'Female', language: 'Afrikaans', country: 'South Africa' },
    { id: 'voice-2', name: 'Willem', gender: 'Male', language: 'Afrikaans', country: 'South Africa' },
    { id: 'voice-3', name: 'Anila', gender: 'Female', language: 'Albanian', country: 'Albania' },
    { id: 'voice-4', name: 'Ilir', gender: 'Male', language: 'Albanian', country: 'Albania' },
    { id: 'voice-5', name: 'Ameha', gender: 'Male', language: 'Amharic', country: 'Ethiopia' },
    { id: 'voice-6', name: 'Mekdes', gender: 'Female', language: 'Amharic', country: 'Ethiopia' },
    { id: 'voice-39', name: 'Babek', gender: 'Male', language: 'Azerbaijani', country: 'Azerbaijan' },
    { id: 'voice-40', name: 'Banu', gender: 'Female', language: 'Azerbaijani', country: 'Azerbaijan' },
    { id: 'voice-41', name: 'Nabanita', gender: 'Female', language: 'Bengali', country: 'Bangladesh' },
    { id: 'voice-42', name: 'Pradeep', gender: 'Male', language: 'Bengali', country: 'Bangladesh' },
    { id: 'voice-43', name: 'Bashkar', gender: 'Male', language: 'Bengali', country: 'India' },
    { id: 'voice-44', name: 'Tanishaa', gender: 'Female', language: 'Bengali', country: 'India' },
    { id: 'voice-45', name: 'Goran', gender: 'Male', language: 'Bosnian', country: 'Bosnia and Herzegovina' },
    { id: 'voice-46', name: 'Vesna', gender: 'Female', language: 'Bosnian', country: 'Bosnia and Herzegovina' },
    { id: 'voice-47', name: 'Borislav', gender: 'Male', language: 'Bulgarian', country: 'Bulgaria' },
    { id: 'voice-48', name: 'Kalina', gender: 'Female', language: 'Bulgarian', country: 'Bulgaria' },
    { id: 'voice-49', name: 'Nilar', gender: 'Female', language: 'Burmese', country: 'Myanmar' },
    { id: 'voice-50', name: 'Thiha', gender: 'Male', language: 'Burmese', country: 'Myanmar' },
    { id: 'voice-51', name: 'Enric', gender: 'Male', language: 'Catalan', country: 'Spain' },
    { id: 'voice-52', name: 'Joana', gender: 'Female', language: 'Catalan', country: 'Spain' },
    { id: 'voice-67', name: 'Gabrijela', gender: 'Female', language: 'Croatian', country: 'Croatia' },
    { id: 'voice-68', name: 'Srecko', gender: 'Male', language: 'Croatian', country: 'Croatia' },
    { id: 'voice-69', name: 'Antonin', gender: 'Male', language: 'Czech', country: 'Czech Republic' },
    { id: 'voice-70', name: 'Vlasta', gender: 'Female', language: 'Czech', country: 'Czech Republic' },
    { id: 'voice-71', name: 'Christel', gender: 'Female', language: 'Danish', country: 'Denmark' },
    { id: 'voice-72', name: 'Jeppe', gender: 'Male', language: 'Danish', country: 'Denmark' },
    { id: 'voice-73', name: 'Arnaud', gender: 'Male', language: 'Dutch', country: 'Belgium' },
    { id: 'voice-74', name: 'Dena', gender: 'Female', language: 'Dutch', country: 'Belgium' },
    { id: 'voice-75', name: 'Colette', gender: 'Female', language: 'Dutch', country: 'Netherlands' },
    { id: 'voice-76', name: 'Fenna', gender: 'Female', language: 'Dutch', country: 'Netherlands' },
    { id: 'voice-77', name: 'Maarten', gender: 'Male', language: 'Dutch', country: 'Netherlands' },
    { id: 'voice-125', name: 'Anu', gender: 'Female', language: 'Estonian', country: 'Estonia' },
    { id: 'voice-126', name: 'Kert', gender: 'Male', language: 'Estonian', country: 'Estonia' },
    { id: 'voice-127', name: 'Angelo', gender: 'Male', language: 'Filipino', country: 'Philippines' },
    { id: 'voice-128', name: 'Blessica', gender: 'Female', language: 'Filipino', country: 'Philippines' },
    { id: 'voice-129', name: 'Harri', gender: 'Male', language: 'Finnish', country: 'Finland' },
    { id: 'voice-130', name: 'Noora', gender: 'Female', language: 'Finnish', country: 'Finland' },
    { id: 'voice-144', name: 'Roi', gender: 'Male', language: 'Galician', country: 'Spain' },
    { id: 'voice-145', name: 'Sabela', gender: 'Female', language: 'Galician', country: 'Spain' },
    { id: 'voice-146', name: 'Eka', gender: 'Female', language: 'Georgian', country: 'Georgia' },
    { id: 'voice-147', name: 'Giorgi', gender: 'Male', language: 'Georgian', country: 'Georgia' },
    { id: 'voice-158', name: 'Athina', gender: 'Female', language: 'Greek', country: 'Greece' },
    { id: 'voice-159', name: 'Nestoras', gender: 'Male', language: 'Greek', country: 'Greece' },
    { id: 'voice-160', name: 'Nestoras', gender: 'Male', language: 'Greek', country: 'Greece' },
    { id: 'voice-161', name: 'Dhwani', gender: 'Female', language: 'Gujarati', country: 'India' },
    { id: 'voice-162', name: 'Niranjan', gender: 'Male', language: 'Gujarati', country: 'India' },
    { id: 'voice-163', name: 'Avri', gender: 'Male', language: 'Hebrew', country: 'Israel' },
    { id: 'voice-164', name: 'Hila', gender: 'Female', language: 'Hebrew', country: 'Israel' },
    { id: 'voice-165', name: 'Madhur', gender: 'Male', language: 'Hindi', country: 'India' },
    { id: 'voice-166', name: 'Swara', gender: 'Female', language: 'Hindi', country: 'India' },
    { id: 'voice-167', name: 'Noemi', gender: 'Female', language: 'Hungarian', country: 'Hungary' },
    { id: 'voice-168', name: 'Tamas', gender: 'Male', language: 'Hungarian', country: 'Hungary' },
    { id: 'voice-169', name: 'Gudrun', gender: 'Female', language: 'Icelandic', country: 'Iceland' },
    { id: 'voice-170', name: 'Gunnar', gender: 'Male', language: 'Icelandic', country: 'Iceland' },
    { id: 'voice-171', name: 'Ardi', gender: 'Male', language: 'Indonesian', country: 'Indonesia' },
    { id: 'voice-172', name: 'Gadis', gender: 'Female', language: 'Indonesian', country: 'Indonesia' },
    { id: 'voice-173', name: 'Colm', gender: 'Male', language: 'Irish', country: 'Ireland' },
    { id: 'voice-174', name: 'Orla', gender: 'Female', language: 'Irish', country: 'Ireland' },
    { id: 'voice-175', name: 'Diego', gender: 'Male', language: 'Italian', country: 'Italy' },
    { id: 'voice-176', name: 'Elsa', gender: 'Female', language: 'Italian', country: 'Italy' },
    { id: 'voice-178', name: 'Isabella', gender: 'Female', language: 'Italian', country: 'Italy' },
    { id: 'voice-179', name: 'Keita', gender: 'Male', language: 'Japanese', country: 'Japan' },
    { id: 'voice-180', name: 'Nanami', gender: 'Female', language: 'Japanese', country: 'Japan' },
    { id: 'voice-181', name: 'Dimas', gender: 'Male', language: 'Javanese', country: 'Indonesia' },
    { id: 'voice-182', name: 'Siti', gender: 'Female', language: 'Javanese', country: 'Indonesia' },
    { id: 'voice-183', name: 'Gagan', gender: 'Male', language: 'Kannada', country: 'India' },
    { id: 'voice-184', name: 'Sapna', gender: 'Female', language: 'Kannada', country: 'India' },
    { id: 'voice-185', name: 'Aigul', gender: 'Female', language: 'Kazakh', country: 'Kazakhstan' },
    { id: 'voice-186', name: 'Daulet', gender: 'Male', language: 'Kazakh', country: 'Kazakhstan' },
    { id: 'voice-187', name: 'Piseth', gender: 'Male', language: 'Khmer', country: 'Cambodia' },
    { id: 'voice-188', name: 'Sreymom', gender: 'Female', language: 'Khmer', country: 'Cambodia' },
    { id: 'voice-190', name: 'InJoon', gender: 'Male', language: 'Korean', country: 'South Korea' },
    { id: 'voice-191', name: 'SunHi', gender: 'Female', language: 'Korean', country: 'South Korea' },
    { id: 'voice-192', name: 'Chanthavong', gender: 'Male', language: 'Lao', country: 'Laos' },
    { id: 'voice-193', name: 'Keomany', gender: 'Female', language: 'Lao', country: 'Laos' },
    { id: 'voice-194', name: 'Everita', gender: 'Female', language: 'Latvian', country: 'Latvia' },
    { id: 'voice-195', name: 'Nils', gender: 'Male', language: 'Latvian', country: 'Latvia' },
    { id: 'voice-196', name: 'Leonas', gender: 'Male', language: 'Lithuanian', country: 'Lithuania' },
    { id: 'voice-197', name: 'Ona', gender: 'Female', language: 'Lithuanian', country: 'Lithuania' },
    { id: 'voice-198', name: 'Aleksandar', gender: 'Male', language: 'Macedonian', country: 'North Macedonia' },
    { id: 'voice-199', name: 'Marija', gender: 'Female', language: 'Macedonian', country: 'North Macedonia' },
    { id: 'voice-200', name: 'Osman', gender: 'Male', language: 'Malay', country: 'Malaysia' },
    { id: 'voice-201', name: 'Yasmin', gender: 'Female', language: 'Malay', country: 'Malaysia' },
    { id: 'voice-202', name: 'Midhun', gender: 'Male', language: 'Malayalam', country: 'India' },
    { id: 'voice-203', name: 'Sobhana', gender: 'Female', language: 'Malayalam', country: 'India' },
    { id: 'voice-204', name: 'Grace', gender: 'Female', language: 'Maltese', country: 'Malta' },
    { id: 'voice-205', name: 'Joseph', gender: 'Male', language: 'Maltese', country: 'Malta' },
    { id: 'voice-206', name: 'Aarohi', gender: 'Female', language: 'Marathi', country: 'India' },
    { id: 'voice-207', name: 'Manohar', gender: 'Male', language: 'Marathi', country: 'India' },
    { id: 'voice-208', name: 'Bataa', gender: 'Male', language: 'Mongolian', country: 'Mongolia' },
    { id: 'voice-209', name: 'Yesui', gender: 'Female', language: 'Mongolian', country: 'Mongolia' },
    { id: 'voice-210', name: 'Hemkala', gender: 'Female', language: 'Nepali', country: 'Nepal' },
    { id: 'voice-211', name: 'Sagar', gender: 'Male', language: 'Nepali', country: 'Nepal' },
    { id: 'voice-212', name: 'Finn', gender: 'Male', language: 'Norwegian', country: 'Norway' },
    { id: 'voice-213', name: 'Pernille', gender: 'Female', language: 'Norwegian', country: 'Norway' },
    { id: 'voice-214', name: 'GulNawaz', gender: 'Male', language: 'Pashto', country: 'Afghanistan' },
    { id: 'voice-215', name: 'Latifa', gender: 'Female', language: 'Pashto', country: 'Afghanistan' },
    { id: 'voice-216', name: 'Dilara', gender: 'Female', language: 'Persian', country: 'Iran' },
    { id: 'voice-217', name: 'Farid', gender: 'Male', language: 'Persian', country: 'Iran' },
    { id: 'voice-218', name: 'Marek', gender: 'Male', language: 'Polish', country: 'Poland' },
    { id: 'voice-219', name: 'Zofia', gender: 'Female', language: 'Polish', country: 'Poland' },
    { id: 'voice-220', name: 'Antonio', gender: 'Male', language: 'Portuguese', country: 'Brazil' },
    { id: 'voice-221', name: 'Francisca', gender: 'Female', language: 'Portuguese', country: 'Brazil' },
    { id: 'voice-223', name: 'Duarte', gender: 'Male', language: 'Portuguese', country: 'Portugal' },
    { id: 'voice-224', name: 'Raquel', gender: 'Female', language: 'Portuguese', country: 'Portugal' },
    { id: 'voice-225', name: 'Alina', gender: 'Female', language: 'Romanian', country: 'Romania' },
    { id: 'voice-226', name: 'Emil', gender: 'Male', language: 'Romanian', country: 'Romania' },
    { id: 'voice-227', name: 'Dmitry', gender: 'Male', language: 'Russian', country: 'Russia' },
    { id: 'voice-228', name: 'Svetlana', gender: 'Female', language: 'Russian', country: 'Russia' },
    { id: 'voice-229', name: 'Nicholas', gender: 'Male', language: 'Serbian', country: 'Serbia' },
    { id: 'voice-230', name: 'Sophie', gender: 'Female', language: 'Serbian', country: 'Serbia' },
    { id: 'voice-231', name: 'Sameera', gender: 'Male', language: 'Sinhala', country: 'Sri Lanka' },
    { id: 'voice-232', name: 'Thilini', gender: 'Female', language: 'Sinhala', country: 'Sri Lanka' },
    { id: 'voice-233', name: 'Lukas', gender: 'Male', language: 'Slovak', country: 'Slovakia' },
    { id: 'voice-234', name: 'Viktoria', gender: 'Female', language: 'Slovak', country: 'Slovakia' },
    { id: 'voice-235', name: 'Petra', gender: 'Female', language: 'Slovenian', country: 'Slovenia' },
    { id: 'voice-236', name: 'Rok', gender: 'Male', language: 'Slovenian', country: 'Slovenia' },
    { id: 'voice-237', name: 'Muuse', gender: 'Male', language: 'Somali', country: 'Somalia' },
    { id: 'voice-238', name: 'Ubax', gender: 'Female', language: 'Somali', country: 'Somalia' },
    { id: 'voice-284', name: 'Jajang', gender: 'Male', language: 'Sundanese', country: 'Indonesia' },
    { id: 'voice-285', name: 'Tuti', gender: 'Female', language: 'Sundanese', country: 'Indonesia' },
    { id: 'voice-286', name: 'Rafiki', gender: 'Male', language: 'Swahili', country: 'Kenya' },
    { id: 'voice-287', name: 'Zuri', gender: 'Female', language: 'Swahili', country: 'Kenya' },
    { id: 'voice-288', name: 'Daudi', gender: 'Male', language: 'Swahili', country: 'Tanzania' },
    { id: 'voice-289', name: 'Rehema', gender: 'Female', language: 'Swahili', country: 'Tanzania' },
    { id: 'voice-290', name: 'Mattias', gender: 'Male', language: 'Swedish', country: 'Sweden' },
    { id: 'voice-291', name: 'Sofie', gender: 'Female', language: 'Swedish', country: 'Sweden' },
    { id: 'voice-292', name: 'Pallavi', gender: 'Female', language: 'Tamil', country: 'India' },
    { id: 'voice-293', name: 'Valluvar', gender: 'Male', language: 'Tamil', country: 'India' },
    { id: 'voice-294', name: 'Kumar', gender: 'Male', language: 'Tamil', country: 'Sri Lanka' },
    { id: 'voice-295', name: 'Saranya', gender: 'Female', language: 'Tamil', country: 'Sri Lanka' },
    { id: 'voice-296', name: 'Kani', gender: 'Female', language: 'Tamil', country: 'Malaysia' },
    { id: 'voice-297', name: 'Surya', gender: 'Male', language: 'Tamil', country: 'Malaysia' },
    { id: 'voice-298', name: 'Anbu', gender: 'Male', language: 'Tamil', country: 'Singapore' },
    { id: 'voice-299', name: 'Venba', gender: 'Female', language: 'Tamil', country: 'Singapore' },
    { id: 'voice-300', name: 'Mohan', gender: 'Male', language: 'Telugu', country: 'India' },
    { id: 'voice-301', name: 'Shruti', gender: 'Female', language: 'Telugu', country: 'India' },
    { id: 'voice-302', name: 'Niwat', gender: 'Male', language: 'Thai', country: 'Thailand' },
    { id: 'voice-303', name: 'Premwadee', gender: 'Female', language: 'Thai', country: 'Thailand' },
    { id: 'voice-304', name: 'Ahmet', gender: 'Male', language: 'Turkish', country: 'Turkey' },
    { id: 'voice-305', name: 'Emel', gender: 'Female', language: 'Turkish', country: 'Turkey' },
    { id: 'voice-306', name: 'Ostap', gender: 'Male', language: 'Ukrainian', country: 'Ukraine' },
    { id: 'voice-307', name: 'Polina', gender: 'Female', language: 'Ukrainian', country: 'Ukraine' },
    { id: 'voice-308', name: 'Gul', gender: 'Female', language: 'Urdu', country: 'India' },
    { id: 'voice-309', name: 'Salman', gender: 'Male', language: 'Urdu', country: 'India' },
    { id: 'voice-310', name: 'Asad', gender: 'Male', language: 'Urdu', country: 'Pakistan' },
    { id: 'voice-311', name: 'Uzma', gender: 'Female', language: 'Urdu', country: 'Pakistan' },
    { id: 'voice-312', name: 'Madina', gender: 'Female', language: 'Uzbek', country: 'Uzbekistan' },
    { id: 'voice-313', name: 'Sardor', gender: 'Male', language: 'Uzbek', country: 'Uzbekistan' },
    { id: 'voice-314', name: 'HoaiMy', gender: 'Female', language: 'Vietnamese', country: 'Vietnam' },
    { id: 'voice-315', name: 'NamMinh', gender: 'Male', language: 'Vietnamese', country: 'Vietnam' },
    { id: 'voice-316', name: 'Aled', gender: 'Male', language: 'Welsh', country: 'United Kingdom' },
    { id: 'voice-317', name: 'Nia', gender: 'Female', language: 'Welsh', country: 'United Kingdom' },
    { id: 'voice-318', name: 'Thando', gender: 'Female', language: 'Zulu', country: 'South Africa' },
    { id: 'voice-319', name: 'Themba', gender: 'Male', language: 'Zulu', country: 'South Africa' }
];
  }

  listVoices() {
    return this.voices
      .map((v) => `🔊 ${v.name} (${v.gender}) - ${v.language} [${v.id}]`)
      .join("\n");
  }

  async textToSpeech(text, voice = "voice-110", pitch = 0, rate = 0) {
    if (!this.voices.some((v) => v.id === voice)) {
      console.log("❌ Suara tidak valid! Pilih dari daftar berikut:\n" + this.listVoices());
      return null;
    }

    try {
      const { data } = await this.client.post(
        this.baseUrl,
        { text, voice, pitch, rate },
        {
          headers: {
            accept: "*/*",
            "accept-language": "id-ID,id;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            origin: "https://speechma.com",
            pragma: "no-cache",
            priority: "u=1, i",
            referer: "https://speechma.com/",
            "sec-ch-ua":
              '"Chromium";v="131", "Not_A Brand";v="24", "Microsoft Edge Simulate";v="131", "Lemur";v="131"',
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": '"Android"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
          },
          responseType: "arraybuffer",
        }
      );

      if (data) {
    const result = await this.uploadAudio(data);
    return result;
  } else {
    console.log("❌ Konversi gagal.");
  }
    } catch (error) {
      console.error("❌ Error saat mengonversi teks ke suara:", error.message);
      return null;
    }
  }

  async uploadAudio(buffer, fileName = "output.mp3") {
    try {
      const form = new FormData();
      form.append("file", new Blob([buffer], { type: "audio/mpeg" }), fileName);

      const { data } = await axios.post(this.uploadUrl, form, {
        headers: { ...form.headers },
      });

      return data?.link || null;
    } catch (error) {
      console.error("❌ Error saat mengunggah file:", error.message);
      return null;
    }
  }
}

module.exports = async (req, res) => {
  const tts = new SpeechmaTTS();
  const text = req.query.text;
  const voice = req.query.voice || "voice-110";
  const pitch = req.query.pitch || 0;
  const rate = req.query.rate || 0;

  if (!text) {
    return res.errorJson({ error: "Teks tidak boleh kosong." },400);
  }

  try {
    const audioUrl = await tts.textToSpeech(text, voice, pitch, rate);
    if (audioUrl) {
      res.succesJson({ url: audioUrl });
    } else {
      res.errorJson({ error: "Gagal mengonversi teks ke suara." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan server." });
  }
};
