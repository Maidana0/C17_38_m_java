package com.nocountry.apirest.utils;

public class EmailUtils {

    public static  String getEmailMessage(String name, String host, String s){
        return "Hola, " + name + ",\n\nEstamos felices de tenerte con nosotros. " +
                "Hemos recibido tu solicitud de credito, en breve si todo va bien," +
                "tendras el saldo disponible en tu cuenta. \n\n"
                + "\n\nEl equipo de soporte" ;
    }
}
